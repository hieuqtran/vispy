// ----------------------------------------------------------------------------
// Copyright (c) 2014, Nicolas P. Rougier. All Rights Reserved.
// Distributed under the (new) BSD License.
// ----------------------------------------------------------------------------
// Hooks:
//  <paint>  : "stroke", "filled" or "outline"
//  <marker> : "steath", "curved",
//             "angle_30", "angle_60", "angle_90",
//             "triangle_30", "triangle_60", "triangle_90",
// ----------------------------------------------------------------------------
#include "math/constants.glsl"
#include "arrowheads/arrowheads.glsl"
#include "antialias/antialias.glsl"

// Varyings
// ------------------------------------
varying float v_antialias;
varying float v_linewidth;
varying float v_size;
varying vec4  v_color;
varying vec2  v_orientation;

void main()
{
    vec2 P = gl_PointCoord.xy - vec2(0.5, 0.5);
    P = vec2(v_orientation.x*P.x - v_orientation.y*P.y,
             v_orientation.y*P.x + v_orientation.x*P.y) * v_size;

    float size = v_size / M_SQRT2;
    float distance = arrow_$arrow_type(P, size, v_linewidth, v_antialias);
    distance = distance;
    gl_FragColor = filled(distance, v_linewidth, v_antialias, v_color, v_color);
}
