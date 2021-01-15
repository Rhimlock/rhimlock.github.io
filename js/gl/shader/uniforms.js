import { gl } from "../gl.js";
export function fetchUniforms(id) {
    const uniforms = {};
    for (let i = 0; i < gl.getProgramParameter(id, gl.ACTIVE_UNIFORMS); i++) {
        const info = gl.getActiveUniform(id, i);
        if (info) {
            const location = gl.getUniformLocation(id, info.name);
            uniforms[info.name] = location;
        }
    }
    return uniforms;
}
//# sourceMappingURL=uniforms.js.map