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
    this.isActive = false;
    this.noiseTexture = textures.noise;
    this.material = this.createMaterial();
    this.cow = new THREE.Mesh(geometry, this.material);
    this.cow.rotateY(Math.PI);
    this.add(this.cow);
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
    });

    // const material = new THREE.MeshNormalMaterial();
    return material;
  }
}
