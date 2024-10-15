#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float reverse(float value) {
    return abs(value - 1.0);
}

float removeNegative(float value) {
    return (value + abs(value)) / 2.0;
}

void main() {
    u_time;
    vec2 st = gl_FragCoord.xy / u_resolution;

    gl_FragColor = vec4(
        0.0,
        removeNegative((reverse(st.x) - step(st.y, 0.5))) +
        removeNegative((st.x - reverse(step(st.y, 0.5)))),
        0.0,
        1.0
    );
}