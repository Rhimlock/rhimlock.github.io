use web_sys::{ WebGl2RenderingContext, WebGlProgram};

pub struct Attribute {
    pub index : u32,
    pub type_: u32,
    pub size: i32
}


pub fn fetch_attributes(gl: &WebGl2RenderingContext, program: &WebGlProgram) -> Vec< Attribute> {
    let len = gl
        .get_program_parameter(&program, WebGl2RenderingContext::ACTIVE_ATTRIBUTES)
        .as_f64()
        .unwrap() as u32;
    let mut vec = Vec::with_capacity(len as usize);
    for index in 0..len {
        let info = gl.get_active_attrib(&program, index).unwrap();
        
        let size = get_size_from_type(info.type_());
        let type_ = get_base_type(info.type_());
        vec.push(Attribute {index: index, type_: type_, size });
    }
    vec
}

fn get_size_from_type(t: u32) -> i32 {
    match t {
        WebGl2RenderingContext::FLOAT => 1,
        WebGl2RenderingContext::FLOAT_VEC2 => 2,
        WebGl2RenderingContext::FLOAT_VEC3 => 3,
        WebGl2RenderingContext::FLOAT_VEC4 => 4,
        _ => panic!(),
    }
}
fn get_base_type(t:u32) -> u32 {
    match t {
        WebGl2RenderingContext::FLOAT => WebGl2RenderingContext::FLOAT,
        WebGl2RenderingContext::FLOAT_VEC2 => WebGl2RenderingContext::FLOAT,
        WebGl2RenderingContext::FLOAT_VEC3 => WebGl2RenderingContext::FLOAT,
        WebGl2RenderingContext::FLOAT_VEC4 => WebGl2RenderingContext::FLOAT,
        
        _ => panic!(),
    }
}
