import * as THREE from 'three';

import bgVert from '../../shader/background/vertex.vert';
import bgFrag from '../../shader/background/fragment.frag';

export default class BackGround extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.SphereBufferGeometry(50, 8, 8);
    const material = new THREE.RawShaderMaterial({
      uniforms: {
        time: {
          value: 0,
        },
      },
      vertexShader: bgVert,
      fragmentShader: bgFrag,
      side: THREE.BackSide,
    });

    super(geometry, material);
    this.time = 0;
  }

  update(deltaTime) {
    this.time += deltaTime;

    this.material.uniforms.time.value = this.time;
  }
}
