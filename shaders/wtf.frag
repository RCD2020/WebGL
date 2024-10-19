#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

float dist() {
    return sqrt(pow(gl_FragCoord.x, 2.0) + pow(gl_FragCoord.y, 2.0));
}

void main() {
    u_time;

    vec3 color = vec3(abs(sin(dist() * 20.0 + u_time)));
    gl_FragColor = vec4(color, 1.0);
}