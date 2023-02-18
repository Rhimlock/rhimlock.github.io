export interface AttributeCollection {
    [key:string] : Attribute
}
export interface Attribute {
    location?: number,
    size: number,
    type: number,
    normalized?: boolean,
    stride?: number
    offset?: number,
    useIPointer?: boolean
}