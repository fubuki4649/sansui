import * as THREE from 'three';
import { addTriangle } from './triangles.js';

// Create scene
export const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.shadowMapType = THREE.PCFSoftShadowMap;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add(light);


// Cube, for visual reference
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0x0099ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add scene objects
addTriangle([
    0.0, 0.0, 0,
    1.0, 0.0, 0,
    0.0,  0.5, 1.0
]);

// Render scene
renderer.render(scene, camera);


// Handle camera movement
document.addEventListener('keydown', function(event) {

    switch(event.key) {
        case 'w':
            camera.position.y += 0.2;
            renderer.render(scene, camera);
            break;
        case 'a':
            camera.position.x -= 0.2;
            renderer.render(scene, camera);
            break;
        case 's':
            camera.position.y -= 0.2;
            renderer.render(scene, camera);
            break;
        case 'd':
            camera.position.x += 0.2;
            renderer.render(scene, camera);
            break;
        case 'o':
            camera.rotation.x += 0.1;
            renderer.render(scene, camera);
            break;
        case 'k':
            camera.rotation.y += 0.1;
            renderer.render(scene, camera);
            break;
        case 'l':
            camera.rotation.x -= 0.1;
            renderer.render(scene, camera);
            break;
        case ';':
            camera.rotation.y -= 0.1;
            renderer.render(scene, camera);
            break;
        case 'q':
            camera.position.z += 0.2;
            renderer.render(scene, camera);
            break;
        case 'e':
            camera.position.z -= 0.2;
            renderer.render(scene, camera);
            break;
    }

});