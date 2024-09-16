import {addTriangle, renderScene} from "./render.js";
import init, { generate_terrain, retrieve_terrain } from '../terrain-gen/pkg/terrain_gen.js';

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
}


// TODO: remove this later, its used for testing
export function test() {

    // mapWidth = 4
    // mapLength = 4
    //
    // heightMap = new Float32Array([
    //     1, 2, 3, 4,
    //     2, 3, 4, 5,
    //     3, 4, 5, 6,
    //     4, 5, 6, 7
    // ])

    generateTerrain(54352534, 10, 10);
    const delay = ms => new Promise(res => setTimeout(res, ms));
    delay(60000).then(r => {
        retrieveTerrain()
        showTerrain();

        console.log(heightMap)
    });

}

// Loads terrain data into scene
export function showTerrain() {

    for(let col = 0; col < mapWidth - 1; col++) {

        for(let row = 0; row < mapLength - 1; row ++) {

            const topLeft = getHeightValue(row, col), topRight = getHeightValue(row + 1, col),
                bottomLeft = getHeightValue(row, col + 1), bottomRight = getHeightValue(row + 1, col + 1);

            addTriangle([
                row, col, topLeft,
                row + 1, col, topRight,
                row,  col + 1, bottomLeft
            ])

            addTriangle([
                row + 1, col + 1, bottomRight,
                row + 1, col, topRight,
                row,  col + 1, bottomLeft
            ])

        }

    }

    renderScene();

}