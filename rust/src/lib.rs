use wasm_bindgen::prelude::*;
use web_sys::WebGl2RenderingContext;

mod gl;
#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);

    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn draw_triangle(
    canvas_id: &str,
) -> Result<WebGl2RenderingContext, JsValue> {
  let gl: WebGl2RenderingContext = gl::init_context(canvas_id).unwrap();
    let mut drawable = gl::drawable::Drawable::new(&gl, WebGl2RenderingContext::TRIANGLES);
    drawable.draw(&gl);

    Ok(gl)
}
