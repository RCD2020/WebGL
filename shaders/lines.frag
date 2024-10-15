#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


float plot(vec2 st) {
    float start = 0.5;
    float end = 0.51;

    return smoothstep(start, end, st.x)
        * abs(smoothstep(start, end, st.x) - 1.0);
}


void main() {
    u_time;
    vec2 st = gl_FragCoord.xy / u_resolution;

    gl_FragColor = vec4(
        0.0,
        plot(st),
        0.0,
        1.0
    );
}