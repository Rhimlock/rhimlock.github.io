use web_sys::WebGlProgram;

use super::{shader, vao::VAO, vbo::VBO, WebGl2RenderingContext};

pub struct Drawable {
    buffers: Vec<VBO>,
    vao: VAO,
    program: WebGlProgram,
    mode: u32,
}

impl Drawable {
    pub fn new(gl: &WebGl2RenderingContext, mode: u32) -> Drawable {
        let program= shader::create_program(gl, include_str!("shader/minimal.vert.glsl"), include_str!("shader/minimal.frag.glsl"));
        let mut buffers: Vec<VBO> = vec![];
        for attrib in shader::attribute::fetch_attributes(gl, &program).iter() {
            buffers.push(VBO::new(
                gl,
                attrib.type_,
                attrib.size,
                false,
                12,
            ));
        }
        buffers[0].update(
            gl,
            &[
                0.0, 1.0, 0.0, // top
                -1.0, -1.0, 0.0, // bottom left
                1.0, -1.0, 0.0, // bottom right
            ],
        );
        let vao = VAO::new(gl, &buffers);
        Self {
            buffers,
            vao,
            program,
            mode,
        }
    }

    pub fn draw(&mut self, gl: &WebGl2RenderingContext) {
        gl.use_program(Some(&self.program));
        self.vao.enable(gl);
        let color = vec![1.0, 0.0, 0.0, 1.0];
  
        let color_location = gl
            .get_uniform_location(&self.program, "fragColor")
            .unwrap();
        gl.uniform4fv_with_f32_array(Some(&color_location), &color);

        gl.draw_arrays(
            self.mode,
            0,
            3 as i32,
        );
    }
}
