import {addTriangle, clearScene, renderScene} from "./render.js";
import init, { generate_terrain, retrieve_terrain } from '../terrain-gen/pkg/terrain_gen.js';
import {scene} from "./render.js";

await init();

let mapLength = 0;
let mapWidth = 0;

let heightMap = new Float32Array(0);

function getHeightValue(x, y) {
    return heightMap[y * mapLength + x];
}

// Calls WASM code to generate the terrain
export function generateTerrain(seed, length, width) {
    mapLength = length;
    mapWidth = width;

    generate_terrain(seed, length, width);
}


// Call WASM code to retrieve mesh data
export function retrieveTerrain() {
    heightMap = retrieve_terrain();
    console.log(heightMap)
}


// Loads terrain data into scene
export function showTerrain(scaleFactor = 1) {

    clearScene()

    for(let col = 0; col < mapWidth - 1; col++) {

        for(let row = 0; row < mapLength - 1; row ++) {

            const topLeft = getHeightValue(row, col), topRight = getHeightValue(row + 1, col),
                bottomLeft = getHeightValue(row, col + 1), bottomRight = getHeightValue(row + 1, col + 1);

            addTriangle([
                row, scaleFactor * topLeft, col,
                row + 1, scaleFactor * topRight, col,
                row, scaleFactor * bottomLeft,  col + 1,
            ])

            addTriangle([
                row + 1, scaleFactor * bottomRight, col + 1,
                row + 1, scaleFactor * topRight, col,
                row, scaleFactor * bottomLeft, col + 1,
            ])

        }

    }

    renderScene();

}