// GL_ES will be defined if you are rendering from a browser or mobile device
// this is a conditional statement that will only use this line of
// code if you are using rendering from browser or mobile
#ifdef GL_ES
precision mediump float;
#endif
// precision affects rendering speed by calculating a certain place of decimals
// lowp, mediump, highp

uniform float u_time;

vec3 red() {
    return vec3(1.0, 0.0, 0.0);

    // not all devices support auto casting,
    // meaning that you will have to insert decimals
    // to guarantee support on all devices
}

void main() {
    u_time; // it will genuinely break if you do not call u_time somewhere in main
    gl_FragColor = vec4(red(), 1.0); // values are normalized, 0 - 1
}