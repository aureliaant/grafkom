// Setup Scene, Camera, Renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 12;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lighting (Diperkaya dengan ambient, point light, dan directional light untuk efek Phong yang lebih mirip shader WebGL)
const ambient = new THREE.AmbientLight(0x191919, 0.3); // Mirip uAmbientColor [0.1,0.1,0.1] * 0.3
scene.add(ambient);

const pointLight = new THREE.PointLight(0xffffff, 1.5); // Diffuse white light
pointLight.position.set(0, 0.8, 1.0); // Mirip uDiffusePosition [0.0, 0.8, 1.0]
scene.add(pointLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Tambahan untuk specular highlight lebih tajam
directionalLight.position.set(0, 1, 1);
scene.add(directionalLight);

// Function to create a box (Ditingkatkan material untuk specular shininess seperti di shader)
function createBox(x, y, z, w, h, d, color) {
  const geometry = new THREE.BoxGeometry(w, h, d);
  const material = new THREE.MeshPhongMaterial({ 
    color: color,
    shininess: 100.0 // Mirip shininessConstant = 100.0 di fragment shader
  });
  const box = new THREE.Mesh(geometry, material);
  box.position.set(x, y, z);
  scene.add(box);
  return box;
}

// ========== LETTER A (Fixed and Rotated) ==========
const A_BASE_X = -3.8; // Adjusted for alignment (digerakkan lebih ke kanan untuk mengurangi gap dengan L)
const A_HEIGHT = 3.90;
const A_Y_OFFSET = A_HEIGHT / 2.3;

// Create a group for letter A to rotate it
const letterAGroup = new THREE.Group();
scene.add(letterAGroup);

// Left leg
const legL = createBox(-1.15, A_Y_OFFSET, 0, 0.5, A_HEIGHT, 0.5, 0x0000ff);
legL.rotation.z = Math.PI / 8;
letterAGroup.add(legL);

// Right leg
const legR = createBox(0.25, A_Y_OFFSET, 0, 0.5, A_HEIGHT, 0.5, 0x0000ff);
legR.rotation.z = -Math.PI / 8;
letterAGroup.add(legR);

// Crossbar
const crossbar = createBox(0, 1.9, 0, 1.5, 0.5, 0.5, 0x0000ff);
letterAGroup.add(crossbar);

// Position and rotate A (180 degrees to fix upside-down)
letterAGroup.position.set(A_BASE_X, 0, 0);
letterAGroup.rotation.z = Math.PI; // 180-degree rotation

// ========== LETTER L ==========
const L_X = -1.4; // Aligned in a straight line (disesuaikan agar lebih dekat dan simetris dengan A)
const L_HEIGHT = 4.0;
const BASELINE_Y = -0.25; // Baseline untuk bottom alignment (sesuai bottom A ≈ -0.254)

// Vertical bar (geser ke bawah agar bottom = BASELINE_Y)
createBox(L_X, BASELINE_Y + L_HEIGHT / 2, 0, 0.5, L_HEIGHT, 0.5, 0x00ff00);

// Horizontal base (geser ke bawah agar bottom = BASELINE_Y)
createBox(L_X + 0.75, BASELINE_Y, 0, 2, 0.5, 0.5, 0x00ff00); // Y disesuaikan ke baseline

// ========== NUMBER 7 ==========
const SEVEN_X = 1.2; // Aligned in a straight line (digerakkan ke kiri untuk mengurangi gap dengan L)
const SEVEN_HEIGHT = 4.0;
const SEVEN_Y_OFFSET = -0.75; // Geser 7 ke bawah agar baseline match dengan A dan L

// Top bar (geser ke bawah)
createBox(SEVEN_X, SEVEN_Y_OFFSET + SEVEN_HEIGHT / 2, 0, 4.0, 0.5, 0.5, 0xff0000);

// Diagonal (geser ke bawah)
const diagonal = createBox(SEVEN_X + 0.9, SEVEN_Y_OFFSET, 0, 0.5, 4.5, 0.5, 0xff0000); // Y disesuaikan ke offset
diagonal.rotation.z = -Math.PI / 5;

// Resize handler
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation
function animate() {
  requestAnimationFrame(animate);
  scene.rotation.y += 0.005;
  renderer.render(scene, camera);
}
animate();