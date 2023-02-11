export interface VertexAttribute {
    location?: number
    type?: number
    size?: number
    normalize?: boolean
    offset?: number
    stride?: number
}

export interface UniformBlock {
    uniforms : Uniform[],
    dataSize : number
    bindingPoint : number

}

export interface Uniform {
    value: number | undefined,
    func: Function,
    offset: number | undefined
}