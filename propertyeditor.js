class PropertyEditor {
  constructor(camera) {
    this.camera = camera;

    this.fovInput = document.getElementById('camera-fov');
    this.nearInput = document.getElementById('camera-near');
    this.farInput = document.getElementById('camera-far');

    this.bindEvents();
  }

  bindEvents() {
    this.fovInput.addEventListener(
      'change',
      this.updateCameraProperties.bind(this)
    );
    this.nearInput.addEventListener(
      'change',
      this.updateCameraProperties.bind(this)
    );
    this.farInput.addEventListener(
      'change',
      this.updateCameraProperties.bind(this)
    );
  }

  updateCameraProperties() {
    const fov = parseFloat(this.fovInput.value);
    const near = parseFloat(this.nearInput.value);
    const far = parseFloat(this.farInput.value);

    this.camera.fov = fov;
    this.camera.near = near;
    this.camera.far = far;
    this.camera.updateProjectionMatrix();
  }
}
