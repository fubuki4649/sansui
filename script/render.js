import * as THREE from 'three';

export const scene = new THREE.Scene();
export const renderer = new THREE.WebGLRenderer();


export function init() {

    // Create scene
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Create renderer
    renderer.shadowMapType = THREE.PCFSoftShadowMap;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Set Light
    const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(light);

    // Cube, for visual reference
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({color: 0x0099ff});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Render scene
    renderer.render(scene, camera);

}


// Add triangle function
// Consumes a 3x3 matrix
// [ pt1_x, pt1_y, pt1_z,
//   pt2_x, ... ]
export function addTriangle(coords) {

    // Create a triangle geometry
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(coords), 3));

    geometry.computeVertexNormals();

    const material = new THREE.MeshPhongMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
    const triangle = new THREE.Mesh(geometry, material);
    scene.add(triangle);

}


// Handle camera movement
document.addEventListener('keydown', function (event) {

    switch (event.key) {
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