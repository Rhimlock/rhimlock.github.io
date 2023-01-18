
export interface Block {
  name: string
  index: number
  size: number
  uniforms: ActiveInfo[]
}

export interface ActiveInfo { 
  name: string
  location: number
  type: GLenum
  size: number 
}
