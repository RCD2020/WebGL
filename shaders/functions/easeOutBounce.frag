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