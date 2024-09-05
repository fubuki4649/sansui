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

camera.position.z = 5;

const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );


// Add box to scene
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


// Render scene
renderer.render(scene, camera);

// Animation function
function animate() {
    // Do nothing for now
}

// Handle camera movement
document.addEventListener('keydown', function(event) {

    console.log('Key pressed:', event.key);

    switch(event.key) {
        case 'w':
            camera.position.y += 1;
            renderer.render(scene, camera);
            break;
        case 'a':
            camera.position.x -= 1;
            renderer.render(scene, camera);
            break;
        case 's':
            camera.position.y -= 1;
            renderer.render(scene, camera);
            break;
        case 'd':
            camera.position.x += 1;
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
    }

});