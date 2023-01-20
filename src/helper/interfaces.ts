
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
  name?: string
  location?: number
  size?: number
  type: GLenum
  normalized?: boolean
  offset?: number
  getValue? (dv: DataView) : number
  setValue? (dv: DataView, value :number ) :  void
  getValues? (dv: DataView) : number[]
  setValues? (dv: DataView, value :number[] ) :  void
}