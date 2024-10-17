#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;


#define PI 3.14159265359

float easeInSine(float num) {
    return 1.0 - cos((num * PI) / 2.0);
}


vec3 colorA = vec3(
    178.0 / 255.0,
    62.0 / 255.0,
    45.0 / 255.0
);
vec3 colorB = vec3(
    47.0 / 255.0,
    172.0 / 255.0,
    157.0 / 255.0
);


void main() {
    float pct = easeInSine(u_time);

    vec3 color = mix(colorA, colorB, pct);

    gl_FragColor = vec4(
        color,
        1.0
    );
}