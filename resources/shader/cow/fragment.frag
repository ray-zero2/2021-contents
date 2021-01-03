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
  vec3 directionLight1 = vec3(1.0, 1.0, -2.0);
  float directionColor1 = dot(normalize(directionLight1), normalize(vNormal));

  vec3 directionLight2 = vec3(-1.0, 1.0, 2.0);
  float directionColor2 = dot(normalize(directionLight2), normalize(vNormal));

  vec3 gamingColor = vec3(time * 0.75, .5, 1.0);
  vec3 color = hsvToRgb(gamingColor);

  vec3 finalColor = color * directionColor1 * directionColor2 + vec3(0.5);

  float opacity =  1.0 - vOneToZero;

  gl_FragColor = vec4(finalColor, opacity);
}
