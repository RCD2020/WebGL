#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

float rand(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    u_time;

    vec2 st = gl_FragCoord.xy / u_resolution;

    gl_FragColor = vec4(
        rand(st),
        rand(st.yx),
        rand(st.xx),
        1.0
    );
}