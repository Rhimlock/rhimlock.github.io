import { gl } from "../../gl.js";

const cache = {} as {[key:string] : Shader}
export class Shader {
    id : WebGLShader
    constructor(name : string, type : number) {

        this.id = gl.createShader(type) as WebGLShader;
        if (cache[name]) {
            gl.deleteShader(this.id);
            return cache[name] as Shader;
        }
        const src = SHADER_SOURCES[name];
        if (this.id) {
            gl.shaderSource(this.id, src);
            gl.compileShader(this.id);
            const err = gl.getShaderInfoLog(this.id);
            if (err) throw `compileError: ${type} - ${err} - ${src}`;
        } else {
            throw "gl.createShader() failed";
        }
        cache[name] = this;
    }
}


export const SHADER_SOURCES = await fetchIndex() as any;
for (const key in SHADER_SOURCES) {
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
