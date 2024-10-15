// there are read only variables that get passed to glsl
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution; // canvas size (w, h)
uniform vec2 u_mouse;      // mouse position in screen pixels
uniform float u_time;      // Time in seconds since load


void main() {
    gl_FragColor = vec4(
        u_mouse[0] / u_resolution[0],
        u_mouse[1] / u_resolution[1],
        abs(sin(u_time)),
        1.0);
}