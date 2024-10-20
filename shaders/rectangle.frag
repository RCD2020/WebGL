#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

float reverse(float value) {
    return abs(value - 1.0);
}

float rectangle(
    float x_norm, float y_norm,
    float x_rad_pix, float y_rad_pix,
    vec2 st
) {
    float radx = x_rad_pix / u_resolution.x;
    float rady = y_rad_pix / u_resolution.y;

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
        rectangle(0.5, 0.5, 50.0, 75.0, st),
        rectangle(0.47, 0.45, 50.0, 100.0, st),
        rectangle(0.53, 0.55, 50.0, 50.0, st),
        1.0
    );
}