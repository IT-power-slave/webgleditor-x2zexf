class SceneManager {
  constructor(camera, cube, light) {
    this.scene = new THREE.Scene();
    this.camera = camera;
    this.cube = cube;
    this.light = light;

    this.init();
  }

  init() {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document
      .getElementById('scene-container')
      .appendChild(this.renderer.domElement);

    this.scene.add(this.cube);
    this.scene.add(this.light);
    this.camera.position.z = 5;

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  // ... Existing SceneManager class ...

  changeGeometry(type) {
    const material = this.cube.material; // Keep the same material
    let newGeometry;

    switch (type) {
      case 'BoxGeometry':
        newGeometry = new THREE.BoxGeometry();
        break;
      case 'ConeGeometry':
        newGeometry = new THREE.ConeGeometry(1, 2);
        break;
      case 'CylinderGeometry':
        newGeometry = new THREE.CylinderGeometry(1, 1, 2);
        break;
      case 'DodecahedronGeometry':
        newGeometry = new THREE.DodecahedronGeometry(1, 1);
        break;
      case 'IcosahedronGeometry':
        newGeometry = new THREE.IcosahedronGeometry(1, 1);
        break;
      case 'OctahedronGeometry':
        newGeometry = new THREE.OctahedronGeometry(1, 1);
        break;

      case 'PlaneGeometry':
        newGeometry = new THREE.PlaneGeometry(1, 1);
        break;
      case 'SphereGeometry':
        newGeometry = new THREE.SphereGeometry(10, 10, 10, 10, 10);
        break;
      case 'TorusGeometry':
        newGeometry = new THREE.TorusGeometry(10, 10, 20, 20);
        break;
      default:
        console.warn('Unknown geometry type:', type);
        return;
    }

    this.scene.remove(this.cube); // Remove the old mesh

    this.cube = new THREE.Mesh(newGeometry, material);
    this.scene.add(this.cube); // Add the new mesh
  }

  toggleWireframe(enabled) {
    this.cube.material.wireframe = enabled;
  }
}
