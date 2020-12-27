import Mouse from './Mouse';
import WebGlContents from './WebGlContents';
import * as THREE from 'three';

export default class Index {
  constructor() {
    this.canvas = document.querySelector('#canvas');
    if (!this.canvas) throw new Error('canvas element not found');
    this.resolution = new THREE.Vector2(
      document.body.clientWidth,
      window.innerHeight
    );
    this.mouse = new Mouse(this.resolution);
    this.webGlContent = new WebGlContents(this.canvas, this.resolution);
    // this.mouse.canHover = true;
    this.start();
  }

  render() {
    this.webGlContent.render();
  }

  animate() {
    this.render();
    requestAnimationFrame(this.animate.bind(this));
  }

  touchStart(event) {
    this.mouse.touchStart(event);
  }
  touchMove(event) {
    this.mouse.touchMove(event);
  }
  touchEnd(event) {
    this.mouse.touchEnd(event);
  }
  resize() {
    this.resolution.set(document.body.clientWidth, window.innerHeight);
    const resolution = this.resolution;
    this.mouse.resize(resolution);
    this.webGlContent.resize(resolution);
  }

  bind() {
    this.canvas?.addEventListener('mousedown', this.touchStart.bind(this));
    window.addEventListener('mousemove', this.touchMove.bind(this));
    window.addEventListener('mouseup', this.touchEnd.bind(this));
    this.canvas?.addEventListener('touchstart', this.touchStart.bind(this));
    window.addEventListener('touchmove', this.touchMove.bind(this));
    window.addEventListener('touchend', this.touchEnd.bind(this));
    window.addEventListener('resize', this.resize.bind(this));
  }

  start() {
    this.bind();
    this.animate();
  }
}
