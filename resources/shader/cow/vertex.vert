attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

// uniform float time;
uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

varying vec2 vUv;
varying vec3 vNormal;


float PI = 3.141592653589793238;

void main() {
  vUv = uv;
  vNormal = normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
