"""Shared Cycles materials and lighting for the arabidopsis-atlas Blender pipeline.

Techniques here are the ones actually researched and verified present in this Blender
5.2 build (not generic advice): Principled BSDF's Thin Wall mode for thin double-sided
geometry like leaves (Blender's own current approach, replacing the older SSS-radius
workaround for foliage), Random Walk subsurface scattering, and a hybrid three-point +
physical-sky-background lighting rig. Grounding: Jensen, Marschner, Levoy & Hanrahan,
"A Practical Model for Subsurface Light Transport," SIGGRAPH 2001 (the BSSRDF this is all
downstream of); Habel, Kusternig & Wimmer, "Physically Based Real-Time Translucency for
Leaves," EGSR 2007 (why SSS/translucency is the right technique for foliage specifically).

No photographic HDRI is used here -- that would need a specific downloaded, licensed asset,
which this pipeline deliberately avoids to stay self-contained and reproducible from code
alone. Blender's own physically-based Nishita sky model (a real atmospheric-scattering
simulation, not an image) stands in for HDRI ambient fill instead of the flat single-color
background v1 used -- zero external assets, closer to real outdoor/greenhouse light than a
flat color, and still fully reproducible from code alone.

Per-organ color variation (leaf/stem tinting below) uses Object Info's per-object Random
output plus procedural noise -- real per-instance variation with no custom per-vertex data
needed. It is NOT keyed to each organ's actual real birthDay (that would need a custom glTF
vertex attribute exported from geometry.ts, non-trivial plumbing for a purely cosmetic
effect) -- a disclosed simplification versus the ideal, not real per-organ age data.
"""
import bpy


def build_leaf_material(name="LeafMaterial", base_color=(0.15, 0.42, 0.09), sss_color=(0.35, 0.65, 0.15)):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    mat.blend_method = "BLEND" if hasattr(mat, "blend_method") else None
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    bsdf = nodes.get("Principled BSDF")
    bsdf.inputs["Roughness"].default_value = 0.35

    # Thin Wall: Blender 5.x's current, correct approach for thin double-sided surfaces
    # (leaves, paper) -- confirmed present on this Principled BSDF (see module docstring).
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

    # Per-leaf color variation + fine mottling, replacing one identical flat color on every
    # leaf at every age: Object Info's Random output gives each leaf mesh its own stable
    # 0-1 value (real per-instance variation, no custom vertex data needed); a fine noise
    # texture layered on top breaks up the color within a single leaf too. Most leaves stay
    # close to the healthy base_color -- only the unlucky high-Random tail biases toward a
    # yellow-green, illustrative of natural leaf-to-leaf variation/aging, not real per-leaf
    # measured data.
    obj_info = nodes.new("ShaderNodeObjectInfo")
    mottle = nodes.new("ShaderNodeTexNoise")
    mottle.inputs["Scale"].default_value = 22.0
    combine = nodes.new("ShaderNodeMath")
    combine.operation = "MULTIPLY_ADD"
    combine.inputs[1].default_value = 0.08  # mottle contributes a small wobble...
    links.new(mottle.outputs["Fac"], combine.inputs[0])
    links.new(obj_info.outputs["Random"], combine.inputs[2])  # ...on top of the per-leaf base value
    # A ColorRamp interpolates LINEARLY across its ENTIRE span by default -- a real test
    # render showed a two-point ramp (base at 0.0, tint at 0.93) already blending most
    # leaves partway toward the tint color at typical mid-range combine values, not holding
    # them at base_color until some threshold as a step function would. A third point
    # holding the SAME base_color out to 0.9 creates an actual flat plateau, so only the
    # combine value's extreme top ~10% shows any blend at all toward the rare tint.
    ramp = nodes.new("ShaderNodeValToRGB")
    ramp.color_ramp.elements[0].position = 0.0
    ramp.color_ramp.elements[0].color = (*base_color, 1.0)
    ramp.color_ramp.elements[1].position = 0.9
    ramp.color_ramp.elements[1].color = (*base_color, 1.0)
    tint_stop = ramp.color_ramp.elements.new(1.0)
    tint_stop.color = (0.56, 0.5, 0.13, 1.0)
    links.new(combine.outputs["Value"], ramp.inputs["Fac"])
    links.new(ramp.outputs["Color"], bsdf.inputs["Base Color"])
    return mat


def build_stem_material(name="StemMaterial", base_color=(0.32, 0.42, 0.2), vary=True):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    bsdf = nodes.get("Principled BSDF")
    bsdf.inputs["Roughness"].default_value = 0.55
    bsdf.inputs["Base Color"].default_value = (*base_color, 1.0)

    if not vary:
        # Object Info's Random is a per-OBJECT-NAME hash: geometry.ts gives every rosette
        # petiole/raceme pedicel a shared base name that Blender auto-suffixes uniquely
        # per instance (.001, .002, ...), so their Random values are usefully spread out.
        # The inflorescence axis is the one organ with no such suffix -- exactly one
        # "Stem_axis" exists per frame, every frame -- so it hashes to the SAME Random
        # value forever, confirmed by a real test render showing it solid pink in every
        # sampled frame from mid-growth on, not a rare per-instance accident. The main
        # stem is also the plant's single most visually dominant organ, so this vary=False
        # path gives it a plain, non-tinted material instead.
        return mat

    # Subtle per-organ tint variation (real Arabidopsis stems commonly show anthocyanin
    # purple-red pigmentation) plus fine length-wise noise, replacing one flat color on
    # every stem/pedicel/silique regardless of which one it is. Illustrative, disclosed as
    # a technique choice -- not measured anthocyanin data for any specific organ.
    obj_info = nodes.new("ShaderNodeObjectInfo")
    noise = nodes.new("ShaderNodeTexNoise")
    noise.inputs["Scale"].default_value = 9.0
    combine = nodes.new("ShaderNodeMath")
    combine.operation = "MULTIPLY_ADD"
    combine.inputs[1].default_value = 0.08
    links.new(noise.outputs["Fac"], combine.inputs[0])
    links.new(obj_info.outputs["Random"], combine.inputs[2])
    # Same plateau-then-short-ramp fix as build_leaf_material (see its comment): a
    # two-point ColorRamp interpolates across its whole span, so most petioles/pedicels in
    # a cluster came out visibly blended toward a bright pastel pink in a real test render,
    # not the intended rare, subtle, muted-burgundy exception.
    ramp = nodes.new("ShaderNodeValToRGB")
    ramp.color_ramp.elements[0].position = 0.0
    ramp.color_ramp.elements[0].color = (*base_color, 1.0)
    ramp.color_ramp.elements[1].position = 0.9
    ramp.color_ramp.elements[1].color = (*base_color, 1.0)
    tint_stop = ramp.color_ramp.elements.new(1.0)
    tint_stop.color = (0.34, 0.13, 0.18, 1.0)
    links.new(combine.outputs["Value"], ramp.inputs["Fac"])
    links.new(ramp.outputs["Color"], bsdf.inputs["Base Color"])
    return mat


def build_root_material(name="RootMaterial", base_color=(0.72, 0.62, 0.42)):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = (*base_color, 1.0)
    bsdf.inputs["Roughness"].default_value = 0.65
    return mat


def build_pot_material(name="PotMaterial", base_color=(0.55, 0.32, 0.22)):
    """Simple unglazed-terracotta-style surface for the plant pot (see build_pot below)."""
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = (*base_color, 1.0)
    bsdf.inputs["Roughness"].default_value = 0.85
    return mat


def build_soil_material(name="SoilMaterial"):
    """Opaque surface material for the visible soil disk -- Principled BSDF with a
    noise-driven bump AND a noise-driven two-tone color variation, not Cycles volumetrics
    (volume nodes model participating media like fog/mist, confirmed present in this Cycles
    build but the wrong tool for an opaque soil surface; see the growth-animation plan)."""
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    bsdf = nodes.get("Principled BSDF")
    bsdf.inputs["Roughness"].default_value = 0.95

    # Two-tone noise-driven color variation (dry/damp-looking patches), replacing one flat
    # color -- once leaves/stems got their own variation (above), a perfectly flat soil
    # color became the visibly odd one out.
    color_noise = nodes.new("ShaderNodeTexNoise")
    color_noise.inputs["Scale"].default_value = 7.0
    color_ramp = nodes.new("ShaderNodeValToRGB")
    color_ramp.color_ramp.elements[0].color = (0.05, 0.035, 0.025, 1.0)
    color_ramp.color_ramp.elements[1].color = (0.13, 0.09, 0.06, 1.0)
    links.new(color_noise.outputs["Fac"], color_ramp.inputs["Fac"])
    links.new(color_ramp.outputs["Color"], bsdf.inputs["Base Color"])

    noise = nodes.new("ShaderNodeTexNoise")
    noise.inputs["Scale"].default_value = 18.0
    bump = nodes.new("ShaderNodeBump")
    bump.inputs["Strength"].default_value = 0.4
    links.new(noise.outputs["Fac"], bump.inputs["Height"])
    links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    return mat


def apply_materials(leaf_mat, stem_mat, root_mat, petal_mat, silique_mat, axis_mat=None):
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
        elif name.startswith("Stem_axis") and axis_mat is not None:
            obj.data.materials.clear()
            obj.data.materials.append(axis_mat)
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
            # Not a plant-organ mesh (e.g. the persistent soil disk/pot, which already have
            # their own materials assigned once outside the per-frame loop) -- leave its
            # existing material assignment alone rather than clearing it to nothing. This
            # was a real bug: unconditionally clearing here wiped the ground's soil
            # material on every frame from frame 0 onward, before this fix existed.
            unmatched.append(name)
    if unmatched:
        print(f"apply_materials: left {len(unmatched)} non-organ mesh(es) untouched: {unmatched}")


def setup_lighting(center, radius):
    """Hybrid three-point-style rig (key/fill/rim area lights) plus a physically-based
    Nishita sky world background for ambient fill, standing in for a photographic HDRI
    (see module docstring for why no HDRI file is used)."""
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
    nodes = world.node_tree.nodes
    links = world.node_tree.links
    bg = nodes.get("Background")

    # Blender's real physically-based atmospheric sky model (an actual scattering
    # simulation, not an image) -- zero external assets, still code-only/reproducible, and
    # a real step up from a single flat background color for ambient fill and horizon tone.
    # This build's Sky Texture node exposes ('SINGLE_SCATTERING', 'MULTIPLE_SCATTERING',
    # 'PREETHAM', 'HOSEK_WILKIE') -- no 'NISHITA' identifier (confirmed by actually calling
    # this, not assumed from an older API); MULTIPLE_SCATTERING is the full atmospheric
    # simulation, the accurate option this project actually wants.
    sky = nodes.new("ShaderNodeTexSky")
    sky.sky_type = "MULTIPLE_SCATTERING"
    sky.sun_elevation = math.radians(35)
    sky.sun_rotation = math.radians(200)
    links.new(sky.outputs["Color"], bg.inputs["Color"])
    # A physically-based sky's absolute brightness is much higher than a flat placeholder
    # color -- 0.6 strength blew the whole frame out white in a real test render. The
    # 3-point light rig above was tuned against the old flat 0.2-strength background, so
    # this keeps the sky as a similarly modest ambient/horizon contributor rather than
    # re-tuning every light's energy to match a full physically-exposed outdoor scene.
    bg.inputs["Strength"].default_value = 0.15


def build_pot(top_center, pot_radius, soil_mat, pot_mat):
    """A bounded soil disk inside a simple pot, replacing the v1 infinite ground plane --
    real lab-grown Arabidopsis photos are essentially always potted, not standing on an
    infinite plane; this is a cheap, disclosed realism cue an infinite plane can't give."""
    from mathutils import Vector

    bpy.ops.mesh.primitive_circle_add(radius=pot_radius, fill_type="NGON", location=top_center)
    soil_disk = bpy.context.active_object
    soil_disk.name = "SoilDisk"
    soil_disk.data.materials.append(soil_mat)

    pot_height = pot_radius * 1.1
    pot_center = Vector((top_center.x, top_center.y, top_center.z - pot_height / 2))
    bpy.ops.mesh.primitive_cylinder_add(radius=pot_radius * 1.04, depth=pot_height, location=pot_center)
    pot_body = bpy.context.active_object
    pot_body.name = "PotBody"
    pot_body.data.materials.append(pot_mat)
    return soil_disk, pot_body
