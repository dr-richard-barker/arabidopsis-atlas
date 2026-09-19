"""Quick, low-sample-count preview render of several growth-snapshot glbs, using ONE
fixed camera framed to the mature plant's bounds -- so growth is visually apparent across
frames, the same way the final animation's camera will show real growth rather than an
auto-zoom that hides it. This is a fast sanity check (EEVEE, no materials work yet), not
the final cinema-quality render -- see refine_showcase.py / the eventual animation script
for that.

Run: /Applications/Blender.app/Contents/MacOS/Blender --background --python \
       blender/preview_growth_frames.py -- <mature_glb> <day1_glb> <day2_glb> ...
"""
import sys
import math
import bpy
from mathutils import Vector

argv = sys.argv[sys.argv.index("--") + 1:]
mature_glb, frame_glbs = argv[0], argv[1:]

# Frame the camera once, using the mature plant, so it doesn't change between renders.
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=mature_glb)
mesh_objs = [o for o in bpy.data.objects if o.type == "MESH"]
world_corners = []
for o in mesh_objs:
    for corner in o.bound_box:
        world_corners.append(o.matrix_world @ Vector(corner))
min_co = [min(c[i] for c in world_corners) for i in range(3)]
max_co = [max(c[i] for c in world_corners) for i in range(3)]
center = Vector([(min_co[i] + max_co[i]) / 2 for i in range(3)])
radius = max(max_co[i] - min_co[i] for i in range(3)) / 2 or 1.0

for glb in frame_glbs:
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.gltf(filepath=glb)

    sun = bpy.data.lights.new("Sun", "SUN")
    sun.energy = 3.0
    sun_obj = bpy.data.objects.new("Sun", sun)
    bpy.context.collection.objects.link(sun_obj)
    sun_obj.rotation_euler = (math.radians(55), 0, math.radians(35))
    fill = bpy.data.lights.new("Fill", "AREA")
    fill.energy = 150
    fill.size = 2
    fill_obj = bpy.data.objects.new("Fill", fill)
    bpy.context.collection.objects.link(fill_obj)
    fill_obj.location = center + Vector((-radius * 1.5, -radius * 1.0, radius * 1.2))
    fill_obj.rotation_euler = (math.radians(70), 0, math.radians(-40))

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
    scene.render.engine = "BLENDER_EEVEE"
    scene.render.resolution_x = 600
    scene.render.resolution_y = 960
    out_path = glb.replace(".glb", "_preview.png")
    scene.render.filepath = out_path
    bpy.ops.render.render(write_still=True)
    print(f"Wrote {out_path}")
