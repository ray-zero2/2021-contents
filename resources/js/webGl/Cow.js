import * as THREE from 'three';
import cowVertex from '../../shader/cow/vertex.vert';
import cowFragment from '../../shader/cow/fragment.frag';

export default class Cow extends THREE.Group {
  /**
   *
   * @param {THREE.Geometry} headGeometry
   * @param {THREE.Geometry} jawGeometry
   * @param { Object } textures
   */
  constructor(geometry, textures) {
    super();
    this.name = 'cow';
    this.time = 0;
    this.isActive = false;
    this.noiseTexture = textures.noise;
    this.material = this.createMaterial();
    this.cow = new THREE.Mesh(geometry, this.material);

    this.createAttribute();
    this.cow.geometry.computeVertexNormals();
    this.cow.geometry.elementsNeedUpdate = true;
    this.cow.rotateY(Math.PI / 2);
    this.add(this.cow);
  }

  createAttribute() {
    const geometry = this.cow.geometry;
    const position = geometry.getAttribute('position').array;
    const positionLength = position.length;
    const delay = [];

    for (let i = 0; i < positionLength; i += 9) {
      const delayValue = Math.random() * 0.5;
      delay.push(delayValue, delayValue, delayValue);
    }

    geometry.setAttribute('delay', new THREE.Float32BufferAttribute(delay, 1));
  }

  setNoiseTexture(texture) {
    this.noiseTexture = texture;
  }

  createMaterial() {
    const material = new THREE.RawShaderMaterial({
      vertexShader: cowVertex,
      fragmentShader: cowFragment,
      uniforms: {
        time: {
          value: 0,
        },
        noiseTexture: {
          value: this.noiseTexture,
        },
      },
      // wireframe: true,
    });

    return material;
  }

  update(deltaTime) {
    this.time += deltaTime;
    this.cow.material.uniforms.time.value = this.time;
  }
}
