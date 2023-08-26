// Dependencies
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const geometry = new THREE.ConeGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();

// Create SceneManager and inject dependencies
const sceneManager = new SceneManager(camera, cube, light);
sceneManager.animate();

// Create PropertyEditor and inject camera dependency
const propertyEditor = new PropertyEditor(camera);

// ... Existing main script ...

document.getElementById('geometry-type').addEventListener('change', function(event) {
  const selectedType = event.target.value;
  sceneManager.changeGeometry(selectedType);
});

document.getElementById('wireframe-toggle').addEventListener('change', function(event) {
  const isWireframe = event.target.checked;
  sceneManager.toggleWireframe(isWireframe);
});