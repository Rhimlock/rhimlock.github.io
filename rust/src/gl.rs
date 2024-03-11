use std::convert::TryInto;

use wasm_bindgen::{JsCast, JsValue};
use web_sys::WebGl2RenderingContext;

pub mod shader;
pub mod vbo;
pub mod vao;
pub mod drawable;

pub fn init_context(canvas_id: &str) -> Result<WebGl2RenderingContext, JsValue> {
    let document = web_sys::window().unwrap().document().unwrap();
    let canvas = document.get_element_by_id(canvas_id).unwrap();
    let canvas: web_sys::HtmlCanvasElement = canvas.dyn_into::<web_sys::HtmlCanvasElement>()?;
    
    let gl: WebGl2RenderingContext = canvas
        .get_context("webgl2")?
        .unwrap()
        .dyn_into::<WebGl2RenderingContext>()
        .unwrap();

    gl.viewport(
        0,
        0,
        canvas.width().try_into().unwrap(),
        canvas.height().try_into().unwrap(),
    );

    Ok(gl)
}
