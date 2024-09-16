import {init as initScene, addTriangle, renderScene} from './render.js'
import init, {  } from '../terrain-gen/pkg/terrain_gen.js';
import {test} from "./scene.js";


initScene();

await init();


renderScene();


// TODO: everything below is for testing, remove later
test();