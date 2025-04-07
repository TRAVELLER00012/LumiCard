import { useRef, useState } from "react"
import { RefObject } from "react"
import styles from "./sideEditPanel.module.css"
import type {ImageControl,TextControl} from "../../hooks/useControl"

interface Props{
    component: "TEXT" | "IMAGE" | "NONE",
    componentState : ImageControl | TextControl,
    setComponentState : (state : any) => void
}

const SideEditPanel = ({component,componentState,setComponentState} : Props) => {
    const [panelOpen,setPanelOpen] = useState(false)

    const source_ = useRef<HTMLInputElement>(null)
    const shadowColor_ = useRef<HTMLInputElement>(null)
    const borderColor_ = useRef<HTMLInputElement>(null)
    const borderWidth_ = useRef<HTMLInputElement>(null)

    const text_ = useRef<HTMLTextAreaElement>(null)
    const color_ = useRef<HTMLInputElement>(null)
    const bold_ = useRef<HTMLInputElement>(null)
    const underline_ = useRef<HTMLInputElement>(null)

    const selectControl = () =>{
        if(component == "IMAGE") return <ImageControl imgDefState={componentState} save={save} shadowColorElement={shadowColor_} borderColorElement={borderColor_} borderWidthElement={borderWidth_} sourceElement={source_} />
        else if (component == "TEXT") return <TextControl bold={bold_} color={color_} save={save} text={text_} textDefState={componentState} underline={underline_}/>
        else return <div></div>
    }

    const save = () =>{
        let file : any;
        let imageUrl: any;
        if(source_.current?.files?.length){
            file = source_.current.files[0];
            imageUrl = URL.createObjectURL(file);
        }

        if(component == "IMAGE"){
            setComponentState({
                ...componentState,
                source: imageUrl ? imageUrl : (componentState as ImageControl).source,
                shadowColor : shadowColor_.current!.value,
                borderColor: borderColor_.current!.value,
                borderWidth: borderWidth_.current!.value ? parseInt(borderWidth_.current!.value) : 0
            })
        }

        else if (component == "TEXT")
            setComponentState({
                ...componentState,
                text: text_.current!.value,
                color: color_.current!.value,
                bold: bold_.current!.checked,
                underline : underline_.current!.checked
            })
    }

    const exportFun = () =>{
        console.log(componentState);
    }

    return (
        <>
            <div className={panelOpen ? styles.parentContainer : [styles.parentContainer,styles.hidden].join(" ")}>
                <div className={styles.header}>
                    <div className={styles.icon}>
                        <svg onClick = {() => setPanelOpen(false)} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" id="left-arrow" width="92" height="92" x="0" y="0" version="1.1" viewBox="0 0 92 92">
                        <path id="XMLID_546_" d="M84 46c0 2.2-1.8 4-4 4H21.6l18.1 18.2c1.6 1.6 1.6 4.1 0 5.7-.7.7-1.7 1.1-2.8 1.1-1 0-2.1-.4-2.8-1.2l-24.9-25c-1.6-1.6-1.6-4.1 0-5.6l24.9-25c1.6-1.6 4.1-1.6 5.7 0 1.6 1.6 1.6 4.1 0 5.7L21.6 42H80c2.2 0 4 1.8 4 4z"></path>
                        </svg>
                    </div>
                    <h1>Edit Panel</h1>
                </div>

                <div className={styles.options}>
                    {selectControl()}
                </div>

                <div className={styles.footer}>
                    {/* <button onClick={save}>Save Project</button> */}
                    <button onClick={exportFun}>Export Project</button>
                </div>
            </div>
            <div onClick = {() => setPanelOpen(true)}className={panelOpen ? [styles.openButton,styles.hidden].join(" ") : styles.openButton}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" id="left-arrow" width="92" height="92" x="0" y="0" version="1.1" viewBox="0 0 92 92">
                <path id="XMLID_546_" d="M84 46c0 2.2-1.8 4-4 4H21.6l18.1 18.2c1.6 1.6 1.6 4.1 0 5.7-.7.7-1.7 1.1-2.8 1.1-1 0-2.1-.4-2.8-1.2l-24.9-25c-1.6-1.6-1.6-4.1 0-5.6l24.9-25c1.6-1.6 4.1-1.6 5.7 0 1.6 1.6 1.6 4.1 0 5.7L21.6 42H80c2.2 0 4 1.8 4 4z"></path>
                </svg>
            </div>
        </>
    )
}

const ImageControl = ({imgDefState,save,shadowColorElement,borderColorElement,borderWidthElement,sourceElement} : {imgDefState : any ,save:() => void, shadowColorElement : RefObject<HTMLInputElement>, borderColorElement : RefObject<HTMLInputElement>, borderWidthElement:RefObject<HTMLInputElement> ,sourceElement:RefObject<HTMLInputElement>} ) =>{
    return(
        <div className={[styles.controls,styles.imageControl].join(" ")}>
            <div>
                <label htmlFor="image-select" className={styles.imageSelectLabel}>Select Image</label>
                <input type="file" id="image-select" accept="image/*" className={styles.imageSelectControl} ref={sourceElement} onChange={save}/>
            </div>
            <div className={styles.imageShadowColor}>
                <label htmlFor="imageShadowColor" >Shadow Colour </label>
                <input type="color" id="imageShadowColor" ref={shadowColorElement} defaultValue={imgDefState?.shadowColor} onChange={save}/>
            </div>
            <div>
                <label htmlFor="imageBorderColor" >Border Color</label>
                <input type="color" id="imageBorderColor" ref={borderColorElement} defaultValue={imgDefState?.borderColor} onChange={save}/>
            </div>
            <div >
                <label htmlFor="imageBorderWidth" >Border Width</label>
                <input type="number" id="imageBorderWidth" ref={borderWidthElement} defaultValue={imgDefState?.borderWidth} onChange={save}/>
            </div>
        </div>
    )
}

const TextControl = ({bold,color,save,text,textDefState,underline} : {textDefState : any, save: () => void, text : RefObject<HTMLTextAreaElement>, color: RefObject<HTMLInputElement>, bold: RefObject<HTMLInputElement>,underline: RefObject<HTMLInputElement>}) =>{
    return (
        <div className={[styles.controls,styles.textControl].join(" ")}>
            <div>
                <label htmlFor="text">Text</label>
                <br />
                <textarea ref={text} value={textDefState.text} onChange={save} />
            </div>
            <div>
                <label htmlFor="textColor">Text Colour</label>
                <input type="color" id="textColor" ref={color} value={textDefState.color} onChange={save} />
            </div>

            <div>
                <label htmlFor="textBold">Bold</label>
                <input type="checkbox" id="textBold" ref={bold} checked={textDefState.bold} onChange={save} />
            </div>
            
            <div>
                <label htmlFor="textUnderline">Underline</label>
                <input type="checkbox" id="textUnderline" ref={underline} checked={textDefState.underline} onChange={save}/>
            </div>

        </div>
    )
}

export default SideEditPanel