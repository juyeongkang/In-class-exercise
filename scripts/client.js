// Art 109 Three.js Demo Site
// client.js
// A basic three.js scene which displays and rotates a polygon with a wireframe

// Extract globals from external script
const { THREE } = window;

// Create a scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  50,
  500 / 500,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xFFEE00);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(500, 500);
document.body.appendChild(renderer.domElement);

// Add a polygon to the scene
const geometry = new THREE.TorusKnotGeometry( 100, 8, 108, 16);
const material = new THREE.MeshBasicMaterial( {color: 0x0554F2} );
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);


// add wireframe to shape
// const matLineBasic = new THREE.LineBasicMaterial({ color: 0x2e8e99 });
// const wireframe = new THREE.WireframeGeometry(geometry);
// const line = new THREE.LineSegments(wireframe, matLineBasic);
// line.material.depthTest = false;
// line.material.opacity = 0.9;
// line.material.transparent = false;
// scene.add(line);

// Position our camera so we can see the shape
// camera.position.z = 5;

// Add a directional light to the scene
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
scene.add(directionalLight);

// Add an ambient light to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
scene.add(ambientLight);

// Define and then call the render loop
// Define
function animate() {
  requestAnimationFrame( animate );

  // Rotate our shape
  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.01;
  torusKnot.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate()
// Call
// render();
