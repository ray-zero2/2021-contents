precision highp float;

uniform float time;
uniform sampler2D noiseTexture;
// uniform vec4 resolution;

varying vec2 vUv;
varying vec3 vNormal;
varying float vOneToZero;

#pragma glslify: hsvToRgb = require(glsl-util/convertHsvToRgb);


float PI = 3.141592653589793238;

void main() {
  vec3 directionalLight1 = vec3(1.0, 1.0, -2.0);
  float directionalColor1 = dot(normalize(directionalLight1), normalize(vNormal));

  vec3 directionalLight2 = vec3(-1.0, 1.0, 2.0);
  float directionalColor2 = dot(normalize(directionalLight2), normalize(vNormal));

  vec3 gamingColor = vec3(time * 0.2, .5, 1.0);
  vec3 color = hsvToRgb(gamingColor);

  vec3 finalColor = color * directionalColor1 *directionalColor2 + vec3(0.7);


  gl_FragColor = vec4(finalColor, 1.0);
}
