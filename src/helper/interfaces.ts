
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