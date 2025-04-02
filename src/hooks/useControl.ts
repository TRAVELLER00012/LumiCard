import { useState } from "react";

export type ControlType = {
    state: "IMAGE" | "TEXT" | "NONE",
    id:number
}

export type ImageControl = {
    source : string,
    borderColor : string,
    borderWidth : number,
    shadowColor : string
}
export type TextControl = {
    text : string,
    color : string,
    bold : boolean,
    underline : boolean
}

const useControl = (defaultImageControls : ImageControl[] = [], defaultTextControls : TextControl[] = [], defaultControlState : ControlType = {state:"NONE",id:0}) =>{
    const [control,setControl] = useState<ControlType>(defaultControlState)
    const [imageControl,setImageControl] = useState<ImageControl[]>(defaultImageControls)
    const [textControl,setTextControl] = useState<TextControl[]>(defaultTextControls)

    const selectImage = (id:number) =>{
        setControl({state:"IMAGE",id})
    }

    const selectText = (id:number) =>{
        setControl({state:"TEXT",id})
    }

    const updateState = (id:number,setter: (state: any) => void,newItem : any) => {
        setter((state: any) => {
            const new_s = [...state]
            new_s[id] = newItem
            return new_s
        })
    }
    
    return {
        control,
        setControl,
        imageControl,
        setImageControl,
        textControl,
        setTextControl,
        selectImage,
        selectText,
        updateState,
      };
}

export const setImageStyles = (imageControl : ImageControl[], id : number) => ({boxShadow: `-25px 25px 100px ${imageControl[id].shadowColor}`, borderWidth: `${imageControl[id].borderWidth}px`, borderColor: imageControl[id].borderColor})
export const setTextStyles = (textControl : TextControl[], id:number) => ({color:textControl[id].color,fontWeight: textControl[id].bold ? "600" : "normal", textDecoration : textControl[id].underline ? "underline" : "none"})
export const getText = (textControl : TextControl[], id:number) => textControl[id].text
export default useControl;