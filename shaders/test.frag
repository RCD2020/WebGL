#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#define MAX_DIST sqrt(pow(u_resolution.x, 2.0) + pow(u_resolution.y, 2.0));

float dist2mouse() {
    float x_dist = gl_FragCoord.x - u_mouse.x / 2.0;
    float y_dist = gl_FragCoord.y - (u_mouse.y + u_resolution.y) / 2.0;

    float dist = sqrt(pow(x_dist, 2.0) + pow(y_dist, 2.0));
    return pow(dist, 1.5) / MAX_DIST;
}


void main() {
    u_time;
    vec2 st = gl_FragCoord.xy / u_resolution;

    gl_FragColor = vec4(
        0.0,
        // (u_mouse.y + u_resolution.y) / 2.0 / u_resolution.y,
        dist2mouse(),
        0.0,
        1.0
    );
}