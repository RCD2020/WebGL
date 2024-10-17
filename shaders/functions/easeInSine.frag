#define PI 3.14159265359

float easeInSine(float num) {
    return 1.0 - cos((num * PI) / 2.0);
}