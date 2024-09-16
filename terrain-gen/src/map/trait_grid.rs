pub trait Grid {

    fn init(&mut self, seed: u32, x: u32, y: u32, pitch: f64);

    fn get(&self, x: u32, y: u32) -> f64;
    
    fn get_all(&self) -> Box<[f64]>;
    
}