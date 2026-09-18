"""Blender-refined showcase render -- a separate, offline, static illustration, NOT part
of the live interactive viewer (which stays fully parametric so ecotype-switching keeps
working; see the manuscript discussion for why those are different jobs).

Technique deliberately mirrors what rice-atlas's own source actually does (read directly,
not guessed): a Solidify modifier + shade_smooth on leaf-blade meshes only, nothing else.
No subdivision sculpting, no procedural textures, no particle systems -- rice-atlas itself
doesn't do that either, and there is no reason for this showcase to overreach it.

Run with the installed Blender app (bpy is not pip-installed on this machine):
  /Applications/Blender.app/Contents/MacOS/Blender --background --python blender/refine_showcase.py -- col0
  /Applications/Blender.app/Contents/MacOS/Blender --background --python blender/refine_showcase.py -- ler
"""
import sys
import math
import bpy

argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else ["col0"]
ecotype_id = argv[0]

GLB_PATH = f"blender/exports/{ecotype_id}.glb"
OUT_PATH = f"blender/exports/{ecotype_id}_showcase.png"

# Start from an empty scene.
bpy.ops.wm.read_factory_settings(use_empty=True)

bpy.ops.import_scene.gltf(filepath=GLB_PATH)

# Solidify + shade_smooth on leaf-blade meshes only -- matches rice-atlas's own
# blender_refine.py technique exactly (it targets objects named "LeafBlade_*").
for obj in bpy.data.objects:
    if obj.type == "MESH" and obj.name.startswith("LeafBlade"):
        mod = obj.modifiers.new(name="Solidify", type="SOLIDIFY")
        mod.thickness = 0.01
        mod.use_even_offset = True
        bpy.context.view_layer.objects.active = obj
        bpy.ops.object.modifier_apply(modifier=mod.name)
        bpy.ops.object.shade_smooth()

# Simple three-point-ish lighting + camera, no HDRI/procedural textures.
sun = bpy.data.lights.new(name="Sun", type="SUN")
sun.energy = 3.0
sun_obj = bpy.data.objects.new("Sun", sun)
bpy.context.collection.objects.link(sun_obj)
sun_obj.rotation_euler = (math.radians(55), 0, math.radians(35))

fill = bpy.data.lights.new(name="Fill", type="AREA")
fill.energy = 150
fill.size = 2
fill_obj = bpy.data.objects.new("Fill", fill)
bpy.context.collection.objects.link(fill_obj)
fill_obj.rotation_euler = (math.radians(70), 0, math.radians(-40))

cam_data = bpy.data.cameras.new("Camera")
cam_obj = bpy.data.objects.new("Camera", cam_data)
bpy.context.collection.objects.link(cam_obj)
bpy.context.scene.camera = cam_obj

# Auto-frame on the actual imported geometry's bounds rather than a hand-guessed
# position -- the scene's real extent depends on ecotype parameters (rosette radius,
# stem height), so a fixed camera position drifts out of frame across ecotypes.
mesh_objs = [o for o in bpy.data.objects if o.type == "MESH"]
world_corners = []
for o in mesh_objs:
    for corner in o.bound_box:
        world_corners.append(o.matrix_world @ __import__("mathutils").Vector(corner))

min_co = [min(c[i] for c in world_corners) for i in range(3)]
max_co = [max(c[i] for c in world_corners) for i in range(3)]
center = [(min_co[i] + max_co[i]) / 2 for i in range(3)]
radius = max(max_co[i] - min_co[i] for i in range(3)) / 2 or 1.0

fill_obj.location = (center[0] - radius * 1.5, center[1] - radius * 1.0, center[2] + radius * 1.2)

from mathutils import Vector

az, el, dist = math.radians(35), math.radians(14), radius * 1.9
center_v = Vector(center)
cam_obj.location = center_v + Vector((
    dist * math.cos(el) * math.sin(az),
    -dist * math.cos(el) * math.cos(az),
    dist * math.sin(el) + radius * 0.15,
))
# Standard, reliable way to point a Blender camera at a target (its local -Z looks
# forward, +Y is up) -- far less error-prone than hand-deriving Euler angles.
look_dir = center_v - cam_obj.location
cam_obj.rotation_euler = look_dir.to_track_quat("-Z", "Y").to_euler()
cam_data.lens = 50

scene = bpy.context.scene
scene.render.engine = "BLENDER_EEVEE"
scene.render.resolution_x = 1000
scene.render.resolution_y = 1600
scene.render.film_transparent = True
scene.render.filepath = OUT_PATH
bpy.ops.render.render(write_still=True)
print(f"Wrote {OUT_PATH}")
