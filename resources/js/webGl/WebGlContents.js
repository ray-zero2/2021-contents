import * as THREE from 'three';
import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2';
import Camera from './Camera';
import { MathFunc } from '../utils/Utils';

import Cow from './Cow';
import BackGround from './BackGround';

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

    this.cow = null;
    this.background = null;
  }

  async load() {
    const { geometries, textures } = await this.fetchObjects();

    const noiseTexture = textures.noise;

    noiseTexture.wrapS = THREE.RepeatWrapping;
    noiseTexture.wrapT = THREE.RepeatWrapping;

    this.camera.init();
    this.cow = new Cow(geometries.cow, textures);
    this.background = new BackGround();
    this.scene.add(this.cow);
    this.scene.add(this.background);
  }

  async fetchObjects() {
    const textureLoader = new THREE.TextureLoader();
    const objLoader = new OBJLoader2();

    return await Promise.all([
      objLoader.loadAsync('./model/cow.obj'),
      textureLoader.loadAsync('./images/textures/noise.png'),
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

  render(deltaTime) {
    this.camera.update(deltaTime);

    this.cow.update(deltaTime);

    this.renderer.render(this.scene, this.camera);
  }

  touchStart(e) {}

  touchMove(e) {}

  touchEnd(e) {}

  wheel(e) {}

  resize(resolution) {
    this.resolution = resolution;
    this.camera.resize(resolution);

    this.renderer.setSize(resolution.x, resolution.y);
  }
}
