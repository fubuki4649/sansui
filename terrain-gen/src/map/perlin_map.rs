use noise::{NoiseFn, Perlin};

/// A Perlin Noise heightmap
struct PerlinMap {
    seed: u32,
    x: u32,
    y: u32,
    pitch: f64,
    values: Box<[f64]>
}

impl PerlinMap {

    /// Generates a new Perlin Noise height map with dimensions x * y, with the given pitch and seed
    fn new(seed: u32, x: u32, y: u32, pitch: f64) -> Self {
        let mut map = PerlinMap {
            seed,
            x,
            y,
            pitch,
            values: Vec::with_capacity((x * y) as usize).into_boxed_slice()
        };

        // Populate the struct with values
        let p = Perlin::new(seed);

        for i in 0..x {
            for j in 0..y {
                map.values[(i * y + j) as usize] = p.get([i as f64 * pitch, j as f64 * pitch])
            }
        }

        map
    }

    /// Return the data point at zero-indexed coordinates x, y
    fn get(&self, x: u32, y: u32) -> f64{
        self.values[(x * self.y + y) as usize]
    }

}