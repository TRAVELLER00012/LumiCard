import { useState } from "react"
import styles from "./sideEditPanel.module.css"

const SideEditPanel = () => {
    const [panelOpen,setPanelOpen] = useState(true)

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
                    {/* <ImageControl /> */}
                    <TextControl />
                </div>

                <div className={styles.footer}>
                    <button>Save Project</button>
                    <button>Reset Project</button>
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

const ImageControl = () =>{
    return(
        <div className={[styles.controls,styles.imageControl].join(" ")}>
            <div>
                <label htmlFor="image-select" className={styles.imageSelectLabel} style={{borderWidth:"auto"}}>Select Image</label>
                <input type="file" id="image-select" className={styles.imageSelectControl}/>
            </div>
            <div className={styles.imageShadowColor}>
                <label htmlFor="imageShadowColor" >Shadow Colour </label>
                <input type="color" id="imageShadowColor" />
            </div>
            <div>
                <label htmlFor="imageBorderColor" >Border Color</label>
                <input type="color" id="imageBorderColor" />
            </div>
            <div >
                <label htmlFor="imageBorderWidth" >Border Width</label>
                <input type="number" id="imageBorderWidth" defaultValue={0}/>
            </div>
        </div>
    )
}

const TextControl = () =>{
    return (
        <div className={[styles.controls,styles.textControl].join(" ")}>
            <div>
                <label htmlFor="text">Text</label>
                <br />
                <textarea />
            </div>
            <div>
                <label htmlFor="textColor">Text Colour</label>
                <input type="color" id="textColor" />
            </div>

            <div>
                <label htmlFor="textColor">Text Colour</label>
                <input type="color" id="textColor" />
            </div>
            <div>
                <label htmlFor="textBold">Bold</label>
                <input type="checkbox" id="textBold" defaultChecked />
            </div>
            
            <div>
                <label htmlFor="textUnderline">Underline</label>
                <input type="checkbox" id="textUnderline" />
            </div>

        </div>
    )
}

export default SideEditPanel