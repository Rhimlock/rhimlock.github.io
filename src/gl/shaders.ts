export const shaders = {
    rect : {
        vert : "",
        frag: ""
    },
    example : {
        vert : "",
        frag: ""
    },

} as { [key : string ] : Shader }

for (const [key, value] of Object.entries(shaders)) {
    value.vert = await fetch(`shaders/${key}.vert.glsl`)
    .then(result => result.text());
    value.frag = await fetch(`shaders/${key}.frag.glsl`)
    .then(result => result.text());
}

export interface Shader {
    vert: string,
    frag: string
}