import {init as initScene, addTriangle, renderScene} from './render.js'
import init, {  } from '../terrain-gen/pkg/terrain_gen.js';


initScene();

await init();

addTriangle([
    0.0, 0.0, 0,
    1.0, 0.0, 0,
    0.0,  0.5, 1.0
]);

renderScene();