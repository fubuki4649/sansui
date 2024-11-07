use noise::{NoiseFn, Perlin};
use crate::map::trait_grid::Grid;
extern crate console_error_panic_hook;

/// A Perlin Noise heightmap
pub struct PerlinMap {
    seed: u32,
    x: u32,
    y: u32,
    pitch: f64,
    values: Box<[f64]>
}

impl PerlinMap {
    pub fn new() -> Self {
        console_error_panic_hook::set_once();

        PerlinMap {
            seed: 0,
            x: 0,
            y: 0,
            pitch: 1.0,
            values: Box::new([])
        }
    }

    fn normalize(x: u32, y: u32, point: [f64; 2]) -> [f64; 2] {
        [point[0] / (x - 1) as f64, point[1] / (y - 1) as f64]
    }
}

impl Grid for PerlinMap {

    /// (Re)initializes a Perlin Noise height map with dimensions x * y, with the given pitch and seed 
    fn init(&mut self, seed: u32, x: u32, y: u32, pitch: f64) {

        self.seed = seed;
        self.x = x;
        self.y = y;
        self.pitch = pitch;
        self.values = vec![0.0; (x * y) as usize].into_boxed_slice();

        // Populate the struct with values
        let p = Perlin::new(seed);

        for i in 0..x {
            for j in 0..y {
                self.values[(i * y + j) as usize] = p.get(Self::normalize(x, y, [i as f64 * pitch, j as f64 * pitch]))
            }
        }
        
    }

    /// Return the data point at zero-indexed coordinates x, y
    fn get(&self, x: u32, y: u32) -> f64{
        self.values[(x * self.y + y) as usize]
    }

    /// Return the entire heightmap as an array
    fn get_all(&self) -> Box<[f64]>{
        self.values.clone()
    }
    
}
