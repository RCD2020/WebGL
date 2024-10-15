#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


void main() {
    u_time;
    vec2 st = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(step(0.5, st.x));

    gl_FragColor = vec4(color, 1.0);
}