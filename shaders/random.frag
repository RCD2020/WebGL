#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

float rand(vec2 st) {
    return fract(sin(dot(st.xy * abs(sin(u_time)), vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    u_time;

    vec2 st = gl_FragCoord.xy / u_resolution;
    float value = rand(st);
    vec3 color = vec3(value);

    gl_FragColor = vec4(
        color,
        1.0
    );
}