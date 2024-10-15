#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


void main() {
    u_time;

    gl_FragCoord; // this gives us a vec4 set of coordinates
    vec2 st = gl_FragCoord.xy / u_resolution;
                  // by dividing xy by the resolution
                  // we normalize the x y coords, perfect for colors
    
    gl_FragColor = vec4(st.x, 0.0, st.y, 1.0);
}