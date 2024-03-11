use web_sys::{js_sys, WebGl2RenderingContext, WebGlBuffer};

const TARGET :u32 = WebGl2RenderingContext::ARRAY_BUFFER;
pub struct VBO {
    pub id: Option<WebGlBuffer>,
    pub type_:u32,
    pub a_size: i32,
    pub normalized: bool
}

impl VBO {
    pub fn new(gl: &WebGl2RenderingContext, type_: u32,  a_size: i32, normalized: bool, capacity: usize,) -> VBO{
        let id = gl.create_buffer();
        gl.bind_buffer(TARGET, id.as_ref());
        gl.buffer_data_with_i32(TARGET, capacity as i32 * a_size as i32, WebGl2RenderingContext::STATIC_DRAW);
        Self { id , type_, a_size, normalized}
    }

    pub fn update(&mut self, gl: &WebGl2RenderingContext, data: &[f32]) {
        const TARGET :u32 = WebGl2RenderingContext::ARRAY_BUFFER;
        gl.bind_buffer(TARGET, self.id.as_ref());
        let vertices_array = unsafe { js_sys::Float32Array::view(&data) };
        gl.buffer_data_with_array_buffer_view(TARGET, &vertices_array, WebGl2RenderingContext::STATIC_DRAW);
    }
    

    
}