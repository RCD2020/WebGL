#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


float smoothCos(float value) {
    return (cos(value) + 1.0) / 2.0;
}


void main() {
    u_time;
    vec2 st = gl_FragCoord.xy / u_resolution;

    float r = abs(abs(
        smoothstep(0.1, 0.4, st.x)
        * smoothstep(0.1, 0.4, st.y)
        - 1.0
    ) + abs(
        smoothstep(0.6, 0.9, st.x)
        * smoothstep(0.6, 0.9, st.y)
    ) - smoothCos(u_time));
    float g = abs(smoothstep(0.3, 0.7, st.x) - smoothCos(u_time));
    float b = abs(smoothstep(0.3, 0.7, st.y) - smoothCos(u_time));


    gl_FragColor = vec4(
        r,
        g,
        b,
        1.0
    );
}