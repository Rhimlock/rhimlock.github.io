import { gl } from "../../gl.js";

export class Shader {
    id : WebGLShader
    constructor(name : string, type : number) {
        this.id = gl.createShader(type) as WebGLShader;
        const src = SHADER_SOURCES[name];
        if (this.id) {
            gl.shaderSource(this.id, src);
            gl.compileShader(this.id);
            const err = gl.getShaderInfoLog(this.id);
            if (err) throw `compileError: ${type} - ${err} - ${src}`;
        } else {
            throw "gl.createShader() failed";
        }
    }
}


export const SHADER_SOURCES = await fetchIndex() as any;
for (const [key, _value] of Object.entries(SHADER_SOURCES)) {
    SHADER_SOURCES[key] = await fetch(`shaders/${key}.glsl`)
        .then(result => result.text())
}

async function fetchIndex() {
    const listName = "_shaderlist.txt";
    return fetch(`shaders/${listName}`).then(result =>
        result.text().then((text: string) =>
            text.split("\n").filter(str => str.endsWith(".glsl"))
                .reduce((acc: any, curr) => (acc[curr.replace(".glsl", "")] = '', acc), {})
        )
    );
}
