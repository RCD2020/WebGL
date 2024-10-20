#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

float reverse(float value) {
    return abs(value - 1.0);
}

float square(float x_norm, float y_norm, float radius_pixels, vec2 st) {
    float radx = radius_pixels / u_resolution.x;
    float rady = radius_pixels / u_resolution.y;

    float x_blit = step(st.x, x_norm + radx)
       * reverse(step(st.x, x_norm - radx));
    float y_blit = step(st.y, y_norm + rady)
       * reverse(step(st.y, y_norm - rady));
    
    return x_blit * y_blit;
}

void main() {
    u_time;
    vec2 st = gl_FragCoord.xy / u_resolution;

    gl_FragColor = vec4(
        square(0.5, 0.5, 50.0, st),
        square(0.47, 0.45, 50.0, st),
        square(0.53, 0.55, 50.0, st),
        1.0
    );
}