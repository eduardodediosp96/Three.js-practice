import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import positionsAttribute from "./src/geometries/triangle.js";

//Scene
const scene = new THREE.Scene();

//Geometry
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: "red" });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);
//Group
const groupOfCubes = new THREE.Group();
const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", positionsAttribute);
// const cube1 = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshBasicMaterial({ color: "red" })
// );
const material = new THREE.MeshBasicMaterial({ color: "red", wireframe: true });
const mesh = new THREE.Mesh(geometry, material);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "green" })
);
cube2.position.set(-2, 0, 0);
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "yellow" })
);
cube3.position.set(2, 0, 0);
// groupOfCubes.add([cube1, cube2, cube3]);
groupOfCubes.add(geometry);
groupOfCubes.add(cube2);
groupOfCubes.add(cube3);
scene.add(groupOfCubes);
scene.add(mesh);

// Position
// mesh.position.set(0.7, -0.6, 1);

// Rotation
// mesh.rotation.reorder("YXZ");
// mesh.rotation.y = Math.PI / 4;
// mesh.rotation.x = Math.PI / 4;

//Sizes
const sizes = {
  width: 1600,
  height: 1200,
};

//AxesHelper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

//Canvas
const canvas = document.querySelector("canvas.webgl");

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

//Controls
const orbitControls = new OrbitControls(camera, canvas);
orbitControls.enableDamping = true;

// camera.position.x = 0;
// camera.position.z = 3;
// camera.position.set(1, 1, 6);
camera.lookAt(groupOfCubes.position);
scene.add(camera);

//scale
// mesh.scale.set(2, 0.5, 0.5);

//Render
// const canvasRef = useRef(null);
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  // canvas: canvasRef,
});

renderer.setSize(sizes.width, sizes.height);

//Time
let time = Date.now();

//Clock()
const clock = new THREE.Clock();

//GSAP
// gsap.to(groupOfCubes.position, { duration: 1, delay: 1, x: 2 });
// gsap.to(groupOfCubes.position, { duration: 1, delay: 2, x: 0 });

// Animation
const tick = () => {
  // Time;
  // const currentTime = Date.now();
  // const deltaTime = currentTime - time;
  // time = currentTime;
  // Clock;
  // const elapsedTime = clock.getElapsedTime();

  // groupOfCubes.rotation.y = Math.sin(elapsedTime);
  // groupOfCubes.position.y = Math.sin(elapsedTime);
  orbitControls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
