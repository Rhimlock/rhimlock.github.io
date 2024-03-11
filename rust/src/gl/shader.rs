use wasm_bindgen::JsValue;
use web_sys::{WebGl2RenderingContext, WebGlProgram, WebGlShader};

pub mod attribute;
pub mod uniform;

pub fn create_program(gl: &WebGl2RenderingContext, vert_src: &str, frag_src: &str) -> WebGlProgram {
  
    let vertex_shader = create_shader(
        &gl,
        WebGl2RenderingContext::VERTEX_SHADER,
        vert_src,
    )
    .unwrap();
    let fragment_shader = create_shader(
        &gl,
        WebGl2RenderingContext::FRAGMENT_SHADER,
        frag_src,
    )
    .unwrap();

    let id = gl.create_program().unwrap();
    gl.attach_shader(&id, &vertex_shader);
    gl.attach_shader(&id, &fragment_shader);
    gl.link_program(&id);

    if gl
        .get_program_parameter(&id, WebGl2RenderingContext::LINK_STATUS)
        .as_bool()
        .unwrap_or(false)
    {
        // Set the shader program as active.
        gl.use_program(Some(&id));
        id
    } else {
        panic!()
    }
}

fn create_shader(
    gl: &WebGl2RenderingContext,
    shader_type: u32,
    source: &str,
) -> Result<WebGlShader, JsValue> {
    let shader = gl
        .create_shader(shader_type)
        .ok_or_else(|| JsValue::from_str("Unable to create shader object"))?;

    gl.shader_source(&shader, source);
    gl.compile_shader(&shader);

    if gl
        .get_shader_parameter(&shader, WebGl2RenderingContext::COMPILE_STATUS)
        .as_bool()
        .unwrap_or(false)
    {
        Ok(shader)
    } else {
        Err(JsValue::from_str(
            &gl.get_shader_info_log(&shader)
                .unwrap_or_else(|| "Unknown error creating shader".into()),
        ))
    }
}
