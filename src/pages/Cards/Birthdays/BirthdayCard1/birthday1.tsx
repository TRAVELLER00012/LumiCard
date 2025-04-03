import ParticleBackground from "../../../../components/Particles/particles"
import SideEditPanel from "../../../../components/SideEditPanel/sideEditPanel"

import useControl, { getText, setImageStyles, setTextStyles } from "../../../../hooks/useControl"
import type { ImageControl, TextControl } from "../../../../hooks/useControl"

import PersonImage from "../../../../assets/card_images/default_bc1.jpg"

import styles from "./birthday1.module.css"
import Stars from "../../../../components/Stars/stars"

const BirthdayCard1 = () => {

    const {control,imageControl,setImageControl,textControl,setTextControl,selectImage,selectText,updateState,} = useControl([{borderColor:"black",borderWidth:0,shadowColor:"black",source:PersonImage}],[{
        text: "Sending Love Your Way",
        color: "black",
        bold:false,
        underline:false
    },{
        text: "Happy Birthday!",
        color: "black",
        bold:false,
        underline:false
    },{
        text: "See you soon.",
        color: "black",
        bold:false,
        underline:false
    },{
        text: "By - Daksh Kumar",
        color: "black",
        bold:false,
        underline:false
    }])

    const getComponentState = () => control.state == "TEXT" ? textControl[control.id] : imageControl[control.id]
    const setterOfComponentState = (state: TextControl | ImageControl) => control.state ==  "TEXT" ? updateState(control.id,setTextControl,state) : updateState(control.id,setImageControl,state)
    
    return (
        <>  
            <ParticleBackground />
            <SideEditPanel component={control.state} componentState={getComponentState()} setComponentState={setterOfComponentState} />
            <div className={styles.parentContainer}>
                <div className={styles.rightTopDecorations}><Stars position="TR"/></div>

                <div className={styles.bottomLeftDecorations}><Stars position="BL"/></div>
                
                <div className={styles.container}>
                    <div className={styles.image} onClick={() => selectImage(0)} style={setImageStyles(imageControl,0)}>
                        <img src={PersonImage} />
                    </div>
                    
                    <div className={styles.parentTextContainer}>
                        <p onClick={() => selectText(0)} style={setTextStyles(textControl,0)}>{getText(textControl,0)}</p>
                        <h1 onClick={() => selectText(1)} style={setTextStyles(textControl,1)}>{getText(textControl,1)}</h1>
                        <h2 onClick={() => selectText(2)} style={setTextStyles(textControl,2)}>{getText(textControl,2)}</h2>
                        <p className={styles.byLine} onClick={() => selectText(3)} style={setTextStyles(textControl,3)}>{getText(textControl,3)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BirthdayCard1