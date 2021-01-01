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

    this.clock = new THREE.Clock(true);
    this.mouse = new Mouse(this.resolution);
    this.webGlContent = new WebGlContents(this.canvas, this.resolution);
    // this.mouse.canHover = true;
    this.init();
    this.bind();
  }

  render(deltaTime) {
    this.webGlContent.render(deltaTime);
  }

  animate() {
    const deltaTime = this.clock.getDelta();
    this.time += deltaTime;
    this.render(deltaTime);
    requestAnimationFrame(this.animate.bind(this));
  }

  // touchStart(event) {
  //   this.mouse.touchStart(event);
  //   this.webGlContent.touchStart(event);
  // }
  // touchMove(event) {
  //   this.mouse.touchMove(event);
  //   this.webGlContent.touchMove(event);
  // }
  // touchEnd(event) {
  //   this.mouse.touchEnd(event);
  //   this.webGlContent.touchEnd(event);
  // }
  // wheel(event) {
  //   this.webGlContent.wheel(event);
  // }
  resize() {
    this.resolution.set(document.body.clientWidth, window.innerHeight);
    const resolution = this.resolution;
    this.mouse.resize(resolution);
    this.webGlContent.resize(resolution);
  }

  bind() {
    // window.addEventListener('mousedown', this.touchStart.bind(this));
    // window.addEventListener('mousemove', this.touchMove.bind(this));
    // window.addEventListener('mouseup', this.touchEnd.bind(this));
    // window.addEventListener('touchstart', this.touchStart.bind(this));
    // window.addEventListener('touchmove', this.touchMove.bind(this));
    // window.addEventListener('touchend', this.touchEnd.bind(this));
    // window.addEventListener('wheel', this.wheel.bind(this));
    window.addEventListener('resize', this.resize.bind(this));
  }

  start() {
    this.bind();
    this.animate();
  }

  async init() {
    await this.webGlContent.load();

    document.querySelector('.js-loading').classList.remove('is-active');

    this.start();
  }
}
