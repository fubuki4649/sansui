import * as THREE from 'three';

// Create scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.shadowMapType = THREE.PCFSoftShadowMap;
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// Add box to scene
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );

function animate() {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );

}