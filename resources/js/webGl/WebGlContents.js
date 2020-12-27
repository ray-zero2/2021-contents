import * as THREE from 'three';
import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2';
import Camera from './Camera';
import { MathFunc } from '../utils/Utils';

import Cow from './Cow';
// import { Mouse } from './Mouse';

export default class WebGlContents {
  /**
   *
   * @param {HTMLCanvasElement} canvas
   * @param {THREE.Vector2} resolution
   */
  constructor(canvas, resolution) {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.setPixelRatio(MathFunc.clamp(window.devicePixelRatio, 1, 2));
    this.renderer.setClearColor(0x000000, 1.0);
    this.renderer.setSize(resolution.x, resolution.y);
    this.scene = new THREE.Scene();
    this.camera = new Camera({
      fov: 50,
      aspect: resolution.x / resolution.y,
      far: 1000,
      canvas,
      enableDamping: true,
    });
    this.clock = new THREE.Clock(false);

    this.cow = null;
    this.init();
  }

  async init() {
    const { geometries, textures } = await this.fetchObjects();
    const noiseTexture = textures.noise;

    noiseTexture.wrapS = THREE.RepeatWrapping;
    noiseTexture.wrapT = THREE.RepeatWrapping;

    this.camera.init();
    console.log(geometries);
    this.cow = new Cow(geometries.cow, textures);
    this.scene.add(this.cow);
  }

  async fetchObjects() {
    const textureLoader = new THREE.TextureLoader();
    const objLoader = new OBJLoader2();

    return await Promise.all([
      objLoader.loadAsync('/public/model/cow.obj'),
      textureLoader.loadAsync('/public/images/textures/noise.png'),
    ]).then((response) => {
      console.log(response[0]);
      const objChildren = response[0].children;
      const { geometry: cow } = objChildren[0];

      const noiseTexture = response[1];
      const geometries = { cow };
      const textures = { noise: noiseTexture };

      return { geometries, textures };
    });
  }

  render() {
    const deltaTime = this.clock.getDelta();
    this.camera.update(deltaTime);
    this.renderer.render(this.scene, this.camera);
  }

  resize(resolution) {
    this.resolution = resolution;
    this.camera.resize(resolution);

    this.renderer.setSize(resolution.x, resolution.y);
  }
}
