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
export const getImageSource = (imageControl : ImageControl[], id : number) => imageControl[id].source
export const setTextStyles = (textControl : TextControl[], id:number,boldV : number | string  =  600,normalBoldV : number | string = "normal") => ({color:textControl[id].color,fontWeight: textControl[id].bold ? `${boldV}` : `${normalBoldV}`, textDecoration : textControl[id].underline ? "underline" : "none"})
export const getText = (textControl : TextControl[], id:number) => textControl[id].text

export const getComponentState = (control : ControlType, textControl : TextControl[], imageControl : ImageControl[]) => control.state == "TEXT" ? textControl[control.id] : imageControl[control.id]
export const setterOfComponentState = (control : ControlType, updateState : (id:number,setter: (state: any) => void,newItem : any) => void , setTextControl : React.Dispatch<React.SetStateAction<TextControl[]>>, setImageControl : React.Dispatch<React.SetStateAction<ImageControl[]>>) => (state: TextControl | ImageControl) => control.state ==  "TEXT" ? updateState(control.id,setTextControl,state) : updateState(control.id,setImageControl,state)
export default useControl;