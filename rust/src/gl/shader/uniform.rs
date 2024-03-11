// use web_sys::{WebGl2RenderingContext, WebGlProgram};

// pub fn lookup_uniforms(gl: & WebGl2RenderingContext, program: WebGlProgram) {
//     gl.get_program_parameter(program, pname)
    
// }

use web_sys::{WebGl2RenderingContext, WebGlBuffer, WebGlProgram};

pub struct UBO {
    index: u32,
    buffer: Option<WebGlBuffer>,
}

impl UBO {
    pub fn new(gl: &WebGl2RenderingContext, program: WebGlProgram, name: &str) {
        const TARGET: u32 = WebGl2RenderingContext::UNIFORM_BUFFER;
        let index = gl.get_uniform_block_index(&program, name);
        let size = gl.get_active_uniform_block_parameter(&program, index, WebGl2RenderingContext::UNIFORM_BLOCK_DATA_SIZE).unwrap().as_f64().unwrap() as i32;
        let buffer = gl.create_buffer();
        gl.bind_buffer(TARGET, buffer.as_ref());
        gl.buffer_data_with_i32(TARGET, size, WebGl2RenderingContext::DYNAMIC_DRAW);
    }
}