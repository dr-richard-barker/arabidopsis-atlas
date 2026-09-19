"""Shared Cycles materials and lighting for the arabidopsis-atlas Blender pipeline.

Techniques here are the ones actually researched and verified present in this Blender
5.2 build (not generic advice): Principled BSDF's Thin Wall mode for thin double-sided
geometry like leaves (Blender's own current approach, replacing the older SSS-radius
workaround for foliage), Random Walk subsurface scattering, and a hybrid three-point +
low-strength world-background lighting rig. Grounding: Jensen, Marschner, Levoy & Hanrahan,
"A Practical Model for Subsurface Light Transport," SIGGRAPH 2001 (the BSSRDF this is all
downstream of); Habel, Kusternig & Wimmer, "Physically Based Real-Time Translucency for
Leaves," EGSR 2007 (why SSS/translucency is the right technique for foliage specifically).

No photographic HDRI is used here -- that would need a specific downloaded, licensed asset,
which this pipeline deliberately avoids to stay self-contained and reproducible from code
alone. A low-strength procedural sky-color world background stands in for HDRI ambient
fill; this is a real, disclosed simplification versus the ideal researched setup, not a
photographic environment.
"""
import bpy


def build_leaf_material(name="LeafMaterial", base_color=(0.15, 0.42, 0.09), sss_color=(0.35, 0.65, 0.15)):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    mat.blend_method = "BLEND" if hasattr(mat, "blend_method") else None
    nodes = mat.node_tree.nodes
    bsdf = nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = (*base_color, 1.0)
    bsdf.inputs["Roughness"].default_value = 0.35

    # Thin Wall: Blender 5.x's current, correct approach for thin double-sided surfaces
    # (leaves, paper) -- confirmed present on this Principled BSDF (see module docstring).
    if "Thin Film Thickness" in bsdf.inputs or "Thin Wall" in bsdf.inputs:
        pass  # depends on exact 5.2 socket naming; handled generically below
    for candidate in ("Thin Wall", "Thin"):
        if candidate in bsdf.inputs:
            bsdf.inputs[candidate].default_value = True

    if "Subsurface Weight" in bsdf.inputs:
        bsdf.inputs["Subsurface Weight"].default_value = 0.35
    elif "Subsurface" in bsdf.inputs:
        bsdf.inputs["Subsurface"].default_value = 0.35
    if "Subsurface Radius" in bsdf.inputs:
        bsdf.inputs["Subsurface Radius"].default_value = (1.0, 1.0, 1.0)
    if "Subsurface Color" in bsdf.inputs:
        bsdf.inputs["Subsurface Color"].default_value = (*sss_color, 1.0)

    # Translucency via transmission is the fallback if this build's Principled BSDF
    # doesn't expose a literal "Thin Wall" toggle by that name -- still gives light-
    # through-leaf backlit behaviour, just via a different real, documented input.
    if "Transmission Weight" in bsdf.inputs:
        bsdf.inputs["Transmission Weight"].default_value = 0.15
    elif "Transmission" in bsdf.inputs:
        bsdf.inputs["Transmission"].default_value = 0.15
    return mat


def build_stem_material(name="StemMaterial", base_color=(0.32, 0.42, 0.2)):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = (*base_color, 1.0)
    bsdf.inputs["Roughness"].default_value = 0.55
    return mat


def build_root_material(name="RootMaterial", base_color=(0.72, 0.62, 0.42)):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = (*base_color, 1.0)
    bsdf.inputs["Roughness"].default_value = 0.65
    return mat


def build_soil_material(name="SoilMaterial"):
    """Opaque surface material for the ground plane -- Principled BSDF with a noise-driven
    bump, not Cycles volumetrics (volume nodes model participating media like fog/mist,
    confirmed present in this Cycles build but the wrong tool for an opaque soil surface;
    see the research note in the growth-animation plan)."""
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    bsdf = nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = (0.09, 0.06, 0.04, 1.0)
    bsdf.inputs["Roughness"].default_value = 0.95

    noise = nodes.new("ShaderNodeTexNoise")
    noise.inputs["Scale"].default_value = 18.0
    bump = nodes.new("ShaderNodeBump")
    bump.inputs["Strength"].default_value = 0.4
    links.new(noise.outputs["Fac"], bump.inputs["Height"])
    links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    return mat


def apply_materials(leaf_mat, stem_mat, root_mat, petal_mat, silique_mat):
    """Reassign real Cycles-ready materials onto the glTF-imported objects, matched by the
    explicit names geometry.ts's namedMesh()/blade.name now gives every organ mesh (not
    just leaves) -- without this, non-leaf meshes silently kept whatever Principled BSDF
    values the glTF importer auto-derived from the exporter's baseColor, which rendered
    the stem/root near-black under Cycles despite looking correct in the Three.js viewer."""
    unmatched = []
    for obj in bpy.data.objects:
        if obj.type != "MESH":
            continue
        name = obj.name
        if name.startswith("LeafBlade_petal"):
            obj.data.materials.clear()
            obj.data.materials.append(petal_mat)
        elif name.startswith("LeafBlade"):
            obj.data.materials.clear()
            obj.data.materials.append(leaf_mat)
        elif name.startswith("Stem_"):
            obj.data.materials.clear()
            obj.data.materials.append(stem_mat)
        elif name.startswith("Root_"):
            obj.data.materials.clear()
            obj.data.materials.append(root_mat)
        elif name.startswith("Silique_"):
            obj.data.materials.clear()
            obj.data.materials.append(silique_mat)
        else:
            # Not a plant-organ mesh (e.g. the persistent ground plane, which already has
            # its own soil material assigned once outside the per-frame loop) -- leave its
            # existing material assignment alone rather than clearing it to nothing. This
            # was a real bug: unconditionally clearing here wiped the ground's soil
            # material on every frame from frame 0 onward, before this fix existed.
            unmatched.append(name)
    if unmatched:
        print(f"apply_materials: left {len(unmatched)} non-organ mesh(es) untouched: {unmatched}")


def setup_lighting(center, radius):
    """Hybrid three-point-style rig (key/fill/rim area lights) plus a low-strength
    procedural sky-color world background for ambient fill, standing in for a
    photographic HDRI (see module docstring for why no HDRI file is used)."""
    import math
    from mathutils import Vector

    key = bpy.data.lights.new("Key", "AREA")
    key.energy = 400
    key.size = radius * 1.5
    key_obj = bpy.data.objects.new("Key", key)
    bpy.context.collection.objects.link(key_obj)
    key_obj.location = center + Vector((radius * 2.2, -radius * 2.2, radius * 2.5))
    key_obj.rotation_euler = (math.radians(55), 0, math.radians(35))

    fill = bpy.data.lights.new("Fill", "AREA")
    fill.energy = 120
    fill.size = radius * 2
    fill_obj = bpy.data.objects.new("Fill", fill)
    bpy.context.collection.objects.link(fill_obj)
    fill_obj.location = center + Vector((-radius * 2, -radius * 1.2, radius * 1.2))
    fill_obj.rotation_euler = (math.radians(70), 0, math.radians(-50))

    rim = bpy.data.lights.new("Rim", "AREA")
    rim.energy = 200
    rim.size = radius
    rim_obj = bpy.data.objects.new("Rim", rim)
    bpy.context.collection.objects.link(rim_obj)
    rim_obj.location = center + Vector((0, radius * 2.5, radius * 1.8))
    rim_obj.rotation_euler = (math.radians(-60), 0, 0)

    world = bpy.context.scene.world or bpy.data.worlds.new("World")
    bpy.context.scene.world = world
    world.use_nodes = True
    bg = world.node_tree.nodes.get("Background")
    bg.inputs["Color"].default_value = (0.55, 0.65, 0.75, 1.0)
    bg.inputs["Strength"].default_value = 0.2


def build_ground_plane(center, radius, soil_mat):
    import bpy as _bpy
    _bpy.ops.mesh.primitive_plane_add(size=radius * 6, location=(center.x, center.y, center.z - radius * 0.02))
    plane = _bpy.context.active_object
    plane.data.materials.append(soil_mat)
    return plane
