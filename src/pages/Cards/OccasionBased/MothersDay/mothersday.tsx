import { useEffect, useState } from "react";
import useControl, { getComponentState, getImageSource, getText, setImageStyles, setterOfComponentState, setTextStyles } from "../../../../hooks/useControl";

import SideEditPanel from "../../../../components/SideEditPanel/sideEditPanel";

import Heart from  "../../../../assets/images/heart.png"
import Flower from "../../../../assets/images/rose_no_stem.png"
import Person from "../../../../assets/card_images/default_bc1.jpg"

import styles from "./mothersday.module.css"

const MothersDay = () => {
    const [personSelected,setPersonSelected] = useState(false)

    const {control,imageControl,setImageControl,textControl,setTextControl,selectImage,selectText,updateState} = useControl([{
        borderColor:"#000000",
        borderWidth: 5,
        shadowColor:"#000000",
        source: Person
    }],[
        {bold:false,underline:false,color:"#77213E",text:"MoM"},
        {bold:false,underline:false,color:"#77213E",text:"I Love You!"},
        {bold:true,underline:false,color:"#77213E",text:"HAPPY"},
        {bold:false,underline:false,color:"#77213E",text:"Mother's"},
        {bold:false,underline:false,color:"#77213E",text:"Day"},
        {bold:false,underline:false,color:"#77213E",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, id aliquam necessitatibus odit eaque velit."},
    ])

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "auto";
        };
      }, []);
  return (
    <>  
        <SideEditPanel component={control.state} componentState={getComponentState(control,textControl,imageControl)} setComponentState={setterOfComponentState(control,updateState,setTextControl,setImageControl)}/>
        <div className={styles.parentContainer}>
            <div className={styles.container}>
                <div className={[styles.usableCard,styles.wiggle].join(" ")} onClick={() => setPersonSelected(!personSelected)} >
                    <div className={[styles.page,styles.cardCoverPage].join(" ")}>
                        <img src={Heart} className={styles.heart}/>
                        <h1 onClick={() => selectText(0)} style={setTextStyles(textControl,0)}>{getText(textControl,0)}</h1>
                        <h2 onClick={() => selectText(1)} style={setTextStyles(textControl,1)}>{getText(textControl,1)}</h2>
                    </div>
                    <div className={personSelected ? [styles.page,styles.firstPage].join(" ") : [styles.page,styles.firstPage,styles.hidden].join(" ")}style={setImageStyles(imageControl,0)} >
                        <img src={getImageSource(imageControl,0)} className={styles.personImg} onClick={() => selectImage(0)} />
                    </div>
                </div>
                <div className={styles.content}>
                    <img src={Flower} className={[styles.decoration,styles.topDecoration,styles.rightDecoration,styles.flowerLeft].join(" ")}/>
                    <img src={Flower} className={[styles.decoration,styles.topDecoration,styles.rightDecoration,styles.flowerLeft,styles.lastFlower].join(" ")}/>
                    <h2 onClick={() => selectText(2)} style={setTextStyles(textControl,2)}>{getText(textControl,2)}</h2>
                    <h1 onClick={() => selectText(3)} style={setTextStyles(textControl,3)}>{getText(textControl,3)}</h1>
                    <h1 onClick={() => selectText(4)} style={setTextStyles(textControl,4)}>{getText(textControl,4)}</h1>
                    <p  onClick={() => selectText(5)} style={setTextStyles(textControl,5)}>{getText(textControl,5)}</p>
                    <img src={Flower} className={[styles.decoration,styles.topDecoration,styles.rightDecoration,styles.flower].join(" ")}/>
                    <img src={Flower} className={[styles.decoration,styles.topDecoration,styles.rightDecoration,styles.flower,styles.lastFlower].join(" ")}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default MothersDay