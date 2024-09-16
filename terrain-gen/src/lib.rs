mod map;

use std::sync::{Arc, Mutex};
use wasm_bindgen::prelude::*;
use lazy_static::lazy_static;
use crate::map::trait_grid::Grid;
use crate::map::perlin_map::PerlinMap;

lazy_static! {
    static ref HEIGHTMAP: Arc<Mutex<dyn Grid + Send>> = Arc::new(Mutex::new(PerlinMap::new()));
}

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn generate_terrain(seed: u32, x: u32, y: u32) {
    
    let mut map = HEIGHTMAP.lock().unwrap();
    map.init(seed, x, y, 1.0);

}

#[wasm_bindgen]
pub fn retrieve_terrain() -> Box<[f64]> {

    HEIGHTMAP.lock().unwrap().get_all()

}


#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
