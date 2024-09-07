import * as THREE from 'three';
import { scene } from './render.js';
import init, {  } from "./terrain-gen/pkg/terrain_gen.js";

await init();

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

// Calls WASM code to generate the terrain
export function generateTerrain() {
    // Call WASM code to generate scene
}

// Loads terrain data into scene
export function showTerrain() {
    // Call WASM code to add triangles
}