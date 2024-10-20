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