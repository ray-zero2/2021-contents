attribute float delay;
attribute vec2 uv;
attribute vec3 position;
attribute vec3 normal;
attribute vec3 faceNormal;
attribute vec3 center;

uniform float time;
uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

varying vec2 vUv;
varying vec3 vNormal;

varying float vOneToZero;

float PI = 3.141592653589793238;

float duration = 3.0;

#pragma glslify: ease = require(glsl-easings/exponential-in);
#pragma glslify: calcTranslateMat4 = require(glsl-matrix/calcTranslateMat4);
#pragma glslify: calcRotateMat4 = require(glsl-matrix/calcRotateMat4);


void main() {
  float oneToZero = clamp(ease((duration - time  - delay * 2.0 ) / duration) , 0.0, 1.0);
  mat4 translateMat = calcTranslateMat4(vec3(oneToZero * 100.0) * normal);

  float rotateRadian = radians((normal.x + normal.y) * 320.0 * 12.0);
  mat4 rotateMat = calcRotateMat4(vec3(0.0, rotateRadian * oneToZero, 0.0));

  mat4 rotateSelfMat = calcRotateMat4(vec3(0.0, time, 0.0));

  vec4 updatePosition = rotateMat * translateMat * vec4(position, 1.0);
  gl_Position = projectionMatrix * modelViewMatrix * rotateSelfMat * updatePosition;

  vUv = uv;
  vNormal = normal;
  vOneToZero = oneToZero;
}
