import { gl } from "../gl.js";

export interface Uniforms {
    uResInv: WebGLUniformLocation | null,
    uTexInv: WebGLUniformLocation | null,
    uTex: WebGLUniformLocation | null,
    uTileSize: WebGLUniformLocation | null,
    uView: WebGLUniformLocation | null,
    uLayer: WebGLUniformLocation | null,
    uProgress: WebGLUniformLocation | null,
}

export interface LooseUniforms {
    [key: string]: any
}

export function fetchUniforms(id: WebGLProgram): Uniforms {
    const uniforms: LooseUniforms = {};
    for (let i = 0; i < gl.getProgramParameter(id, gl.ACTIVE_UNIFORMS); i++) {
        const info = gl.getActiveUniform(id, i);
        if (info) {
            const location = gl.getUniformLocation(id, info.name);
            uniforms[info.name] = location;
        }
    }
    return uniforms as Uniforms;
}

