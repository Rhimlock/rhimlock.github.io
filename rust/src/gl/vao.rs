use web_sys::{WebGl2RenderingContext, WebGlVertexArrayObject};

use super::vbo::VBO;
pub struct VAO {
    id: Option<WebGlVertexArrayObject>,
}

impl VAO {
    pub fn new(gl: &WebGl2RenderingContext, buffers: &Vec<VBO>) -> VAO{
        let id = gl.create_vertex_array();
        gl.bind_vertex_array(id.as_ref());
        for (index, buffer) in buffers.iter().enumerate() {
            gl.enable_vertex_attrib_array(index as u32);
            gl.bind_buffer(WebGl2RenderingContext::ARRAY_BUFFER, buffer.id.as_ref());
            gl.vertex_attrib_pointer_with_i32(index as u32, buffer.a_size, buffer.type_, buffer.normalized, 0, 0);
        }
        gl.bind_vertex_array(None);
        Self {id}
    }

    pub fn enable(&mut self, gl: &WebGl2RenderingContext) {
        gl.bind_vertex_array(self.id.as_ref());
    }
}