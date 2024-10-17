#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;


#define N1 7.5625
#define D1 2.75

float easeOutBounce(float num) {
    float value;

    if (num < 1.0 / D1) {
        return N1 * num * num;
    } else if (num < 2.0 / D1) {
        return N1 * (num -= 1.5 / D1) * num + 0.75;
    } else if (num < 2.5 / D1) {
        return N1 * (num -= 2.25 / D1) * num + 0.9375;
    } else {
        return N1 * (num -= 2.625 / D1) * num + 0.984375;
    }
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
    float pct = easeOutBounce(u_time);

    vec3 color = mix(colorA, colorB, pct);

    gl_FragColor = vec4(
        color,
        1.0
    );
}