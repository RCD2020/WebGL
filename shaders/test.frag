#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

float dist(vec2 coords) {
    return sqrt(pow(abs(coords.x - gl_FragCoord.x) / 20.0, 2.0) + pow(abs(coords.y - gl_FragCoord.y) / 20.0, 2.0));
}

float wave(float x, float y) {
    return abs(sin(dist(vec2(x, y)) + u_time * -10.0));
}

float wave_normalized(float x, float y) {
    return wave(x * u_resolution.x, y * u_resolution.y);
}

void main() {
    u_time;

    vec3 wave1 = vec3(wave_normalized(0.2, 0.0));
    vec3 wave2 = vec3(wave_normalized(1.0, 1.0));
    // vec3 wave3 = vec3(wave_normalized(0.0, 1.0));

    vec3 color = wave1 + wave2 - 1.0;

    gl_FragColor = vec4(
        color,
        1.0
    );
}