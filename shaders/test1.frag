#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


vec3 line(vec2 st) {
    float g = mod(st.x, st.y);
    float b = mod(st.y, st.x);

    return vec3(0.0, g, b);
}


void main() {
    u_time;
    vec2 st = gl_FragCoord.xy / u_resolution;

    gl_FragColor = vec4(
        line(st),
        1.0
    );
}