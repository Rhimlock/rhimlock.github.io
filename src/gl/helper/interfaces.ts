
export interface BufferItem {
    type: number,
    size?: number,
    offset?: number
}

export interface BufferItemDefinition {
     [key: string]: BufferItem 
}

export interface VertexAttribute extends BufferItem {
    location?: number
    normalize?: boolean
    stride?: number
}

export interface Uniform {
    value: number | undefined,
    func: Function,
    offset: number | undefined
}
