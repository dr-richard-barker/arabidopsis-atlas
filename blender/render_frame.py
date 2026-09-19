"""Render one growth-snapshot glb with real Cycles materials/lighting (blender/materials.py).
This is the shared per-frame render function the full animation script (Phase 3) will call
in a loop; kept as its own script now so it can be timed and visually checked in isolation
before committing to a multi-hour full render.

Run: /Applications/Blender.app/Contents/MacOS/Blender --background --python \
       blender/render_frame.py -- <glb_path> <out_png> [samples] [res_x] [res_y]
"""
import sys
import math
import bpy
from mathutils import Vector

sys.path.insert(0, "blender")
import materials as mat_lib

argv = sys.argv[sys.argv.index("--") + 1:]
glb_path = argv[0]
out_png = argv[1]
samples = int(argv[2]) if len(argv) > 2 else 128
res_x = int(argv[3]) if len(argv) > 3 else 1920
res_y = int(argv[4]) if len(argv) > 4 else 1080

bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=glb_path)

mesh_objs = [o for o in bpy.data.objects if o.type == "MESH"]
world_corners = []
for o in mesh_objs:
    for corner in o.bound_box:
        world_corners.append(o.matrix_world @ Vector(corner))
min_co = [min(c[i] for c in world_corners) for i in range(3)]
max_co = [max(c[i] for c in world_corners) for i in range(3)]
center = Vector([(min_co[i] + max_co[i]) / 2 for i in range(3)])
radius = max(max_co[i] - min_co[i] for i in range(3)) / 2 or 1.0

leaf_mat = mat_lib.build_leaf_material()
petal_mat = mat_lib.build_leaf_material(name="PetalMaterial", base_color=(0.85, 0.85, 0.82), sss_color=(0.9, 0.9, 0.88))
stem_mat = mat_lib.build_stem_material()
root_mat = mat_lib.build_root_material()
silique_mat = mat_lib.build_stem_material(name="SiliqueMaterial", base_color=(0.5, 0.55, 0.25))
mat_lib.apply_materials(leaf_mat, stem_mat, root_mat, petal_mat, silique_mat)

soil_mat = mat_lib.build_soil_material()
mat_lib.build_ground_plane(Vector((center.x, min_co[1], center.z)), radius, soil_mat)
mat_lib.setup_lighting(center, radius)

cam_data = bpy.data.cameras.new("Camera")
cam_obj = bpy.data.objects.new("Camera", cam_data)
bpy.context.collection.objects.link(cam_obj)
bpy.context.scene.camera = cam_obj
az, el, dist = math.radians(35), math.radians(14), radius * 1.9
cam_obj.location = center + Vector((dist * math.cos(el) * math.sin(az), -dist * math.cos(el) * math.cos(az), dist * math.sin(el) + radius * 0.15))
look_dir = center - cam_obj.location
cam_obj.rotation_euler = look_dir.to_track_quat("-Z", "Y").to_euler()
cam_data.lens = 50

scene = bpy.context.scene
scene.render.engine = "CYCLES"
scene.cycles.samples = samples
scene.cycles.device = "GPU"
prefs = bpy.context.preferences.addons["cycles"].preferences
prefs.compute_device_type = "METAL"
prefs.get_devices_for_type("METAL")
for d in prefs.devices:
    d.use = True
scene.render.resolution_x = res_x
scene.render.resolution_y = res_y
scene.render.filepath = out_png
bpy.ops.render.render(write_still=True)
print(f"RENDER_DONE {out_png}")
