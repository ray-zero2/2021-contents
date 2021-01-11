attribute vec3 position;
attribute vec2 uv;

uniform float time;
uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

varying vec2 vUv;
varying vec3 vColor;


#pragma glslify: convertHsvToRgb = require(glsl-util/convertHsvToRgb);
float PI = 3.141592653589793238;

void main() {
  vec2 p = uv * 2.0 - 1.0;
  vec3 hsv = vec3(
    p.y * 0.1 + 0.07,
    1.0,
    0.9
  );
  vec3 rgb = convertHsvToRgb(hsv);
  vUv = uv;
  vColor = rgb;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
