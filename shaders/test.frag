#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


void main() {
    u_time;

    gl_FragColor = vec4(
        0.0,
        gl_FragCoord.x == gl_FragCoord.y,
        0.0,
        1.0
    );
}