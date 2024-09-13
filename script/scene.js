import {addTriangle, renderScene} from "./render.js";

let mapWidth = 0;
let mapLength = 0;

let heightMap = new Float32Array(0);

function getHeightValue(x, y) {
    return heightMap[y * mapLength + x];
}

// Calls WASM code to generate the terrain
export function generateTerrain(width, length) {

    mapWidth = width;
    mapLength = length;

    // Call WASM code to generate scene
}

export function retrieveTerrain() {

    // Call WASM code to retrieve mesh data

}


// TODO: remove this later, its used for testing
export function test() {

    mapWidth = 4
    mapLength = 4

    heightMap = new Float32Array([
        1, 2, 3, 4,
        2, 3, 4, 5,
        3, 4, 5, 6,
        4, 5, 6, 7
    ])

    showTerrain();

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