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
    this.webGlContent = new WebGlContents(this.canvas, this.resolution);
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

  resize() {
    this.resolution.set(document.body.clientWidth, window.innerHeight);
    const resolution = this.resolution;
    this.webGlContent.resize(resolution);
  }

  bind() {
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
