import * as THREE from 'three';
import cowVertex from '../../shader/cow/vertex.vert';
import cowFragment from '../../shader/cow/fragment.frag';

export default class Cow {
  constructor(geometry, textures) {
    this.time = 0;
    this.isActive = false;
    // this.noiseTexture = textures.noise;
    this.material = this.createMaterial();
    this.mesh = new THREE.Mesh(geometry, this.material);

    this.createAttribute();
    this.mesh.geometry.computeVertexNormals();
    this.mesh.geometry.elementsNeedUpdate = true;
    this.mesh.rotateY(Math.PI / 2);
  }

  createAttribute() {
    const geometry = this.mesh.geometry;
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
        // noiseTexture: {
        //   value: this.noiseTexture,
        // },
      },
      // wireframe: true,
    });

    return material;
  }

  update(deltaTime) {
    this.time += deltaTime;
    this.mesh.material.uniforms.time.value = this.time;
  }
}
