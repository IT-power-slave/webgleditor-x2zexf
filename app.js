// app.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', function () {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});
// ... existing code ...

const fovInput = document.getElementById('camera-fov');
const nearInput = document.getElementById('camera-near');
const farInput = document.getElementById('camera-far');

function updateCameraProperties() {
  const fov = parseFloat(fovInput.value);
  const near = parseFloat(nearInput.value);
  const far = parseFloat(farInput.value);

  camera.fov = fov;
  camera.near = near;
  camera.far = far;
  camera.updateProjectionMatrix();
}

fovInput.addEventListener('change', updateCameraProperties);
nearInput.addEventListener('change', updateCameraProperties);
farInput.addEventListener('change', updateCameraProperties);
