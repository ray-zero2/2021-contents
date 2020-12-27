precision mediump float;

// uniform float time;
uniform sampler2D noiseTexture;
// uniform vec4 resolution;

varying vec2 vUv;
varying vec3 vNormal;

float PI = 3.141592653589793238;

void main() {
  // gl_FragColor = vec4(vUv, 0.0, 1.0);
  vec3 testLight = vec3(1.0, 1.0, -2.0);
  float testColor = dot(normalize(testLight), normalize(vNormal));
  gl_FragColor = vec4(vec3(testColor), 1.0);
}
