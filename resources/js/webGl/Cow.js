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
    console.log(this.cow);
  }

  createAttribute() {
    const geometry = this.cow.geometry;
    const position = geometry.getAttribute('position').array;
    const center = [];
    const delay = [];

    for (let i = 0; i < position.length; i += 9) {
      const x1 = position[i];
      const y1 = position[i + 1];
      const z1 = position[i + 2];
      const x2 = position[i + 3];
      const y2 = position[i + 4];
      const z2 = position[i + 5];
      const x3 = position[i + 6];
      const y3 = position[i + 7];
      const z3 = position[i + 8];

      const centerX = (x1 + x2 + x3) / 3;
      const centerY = (y1 + y2 + y3) / 3;
      const centerZ = (z1 + z2 + z3) / 3;

      center.push(
        centerX,
        centerY,
        centerZ,
        centerX,
        centerY,
        centerZ,
        centerX,
        centerY,
        centerZ
      );

      const delayValue = Math.random() * 0.5;
      delay.push(delayValue, delayValue, delayValue);
    }

    geometry.setAttribute(
      'center',
      new THREE.Float32BufferAttribute(center, 3)
    );

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
