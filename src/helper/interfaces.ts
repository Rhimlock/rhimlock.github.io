
export interface Block {
  name: string
  index: number
  size: number
  uniforms: ActiveInfoCollection
}

export interface ActiveInfo { 
  name: string
  location: number
  type: GLenum
  size: number 
}

export interface ActiveInfoCollection {
  [key : string] : ActiveInfo
}

export interface VertexAttrib {
  name: string
  location?: number
  size?: number
  type: GLenum
  normalized?: boolean
  stride?: number
  offset?: number
}