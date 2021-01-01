precision highp float;

uniform float time;

varying vec2 vUv;
varying vec3 vColor;

float PI = 3.141592653589793238;

void main() {

  gl_FragColor = vec4(vec3(vColor), 1.0);
}
