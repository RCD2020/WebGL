#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main() {
    u_time;
    vec2 st = gl_FragCoord.xy / u_resolution;

    gl_FragColor = vec4(
        abs(sin(st.x * 20.0 + u_time * -2.0)),
        abs(sin(st.y * 20.0 + u_time * 20.0)),
        abs(sin(st.x * 20.0 + u_time * 2.0)),
        1.0
    );
}