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