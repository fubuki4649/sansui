import {init as initScene, addTriangle, renderScene} from './render.js'
import init, {  } from '../terrain-gen/pkg/terrain_gen.js';
import {generateTerrain, retrieveTerrain, showTerrain} from "./scene.js";


initScene();

await init();

renderScene();

function isInteger(value) {
    return !isNaN(parseInt(value)) && isFinite(value);
}

export function onRender() {

    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;
    let seed = document.getElementById('seed').value;

    if (!isInteger(length) || !isInteger(width) || !isInteger(seed)) {
        window.alert("Invalid input(s). Length, width, and seed must all be integers.")
        return;
    }

    // Disable render button
    let render = document.getElementById('renderBtn');
    render.disabled = true;
    render.textContent = "Rendering...";

    // Render scenery
    generateTerrain(seed, length, width);
    const delay = ms => new Promise(res => setTimeout(res, ms));
    delay(60000).then(r => {
        retrieveTerrain()
        showTerrain();

        // Re-enable render button
        render.disabled = false;
        render.textContent = "Render";
    });

}