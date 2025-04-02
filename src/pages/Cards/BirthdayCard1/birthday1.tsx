import { useEffect, useState } from "react"
import ParticleBackground from "../../../components/Particles/particles"
import PersonImage from "../../../assets/card_images/default_bc1.jpg"
import styles from "./birthday1.module.css"
import SideEditPanel, { ImageControl, TextControl } from "../../../components/SideEditPanel/sideEditPanel"

const BirthdayCard1 = () => {
    const blueStarsCount = 5
    const redStarCount = 5
    const [blueStars,setBlueStars] = useState<{tr:JSX.Element[],bl:JSX.Element[]}>({bl:[],tr:[]})
    const [redStars,setRedStars] = useState<{tr:JSX.Element[],bl:JSX.Element[]}>({bl:[],tr:[]})
    const [control,setControl] = useState<{state:"TEXT"|"IMAGE"|"NONE",id:number}>({state:"NONE",id:0})

    const [imageControl,setImageControl] = useState<ImageControl[]>([{borderColor:"black",borderWidth:0,shadowColor:"black",source:PersonImage}])
    const [textControl,setTextControl] = useState<TextControl[]>([{
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

    const genStars = (position : "TR" | "BL", type : "BLUE" | "RED", count : number) =>{
        const stars: JSX.Element[] = []
        if(position ==  "TR"){
            for (let i = 0; i < count; i++){
                const randRight =  Math.floor(Math.random() * (30 -5 + 1)) +5
                const randTop =  Math.floor(Math.random() * (25 -5 +1)) +5;
                const randSpeed = Math.floor(Math.random() * (10-5+1) + 5)
                let star = <div></div>;
                if(type == "BLUE") star = <div className={[styles.star,styles.starTR,styles.blueStar,`star${i}`].join(" ")} style={{top:`${randTop}%`,right:`${randRight}%`,animationDuration:`${randSpeed}s`}}></div>
                else star = <div className={[styles.star,styles.starTR,styles.redStar,`star${i}`].join(" ")} style={{top:`${randTop}%`,right:`${randRight}%`,animationDuration:`${randSpeed}s`}}></div>
                stars.push(star)
            }

        }
        else{
            for (let i = 0; i < count; i++){
                const randLeft =  Math.floor(Math.random() * (30 -5 + 1)) +5
                const randBottom =  Math.floor(Math.random() * (25 -5 +1)) +5;
                const randSpeed = Math.floor(Math.random() * (10-5+1) + 5)
                let star = <div></div>;
                if(type == "BLUE") star = <div className={[styles.star,styles.starBL,styles.blueStar,`star${i}`].join(" ")} style={{bottom:`${randBottom}%`,left:`${randLeft}%`,animationDuration:`${randSpeed}s`}}></div>
                else star = <div className={[styles.star,styles.starBL,styles.redStar,`star${i}`].join(" ")} style={{bottom:`${randBottom}%`,left:`${randLeft}%`,animationDuration:`${randSpeed}s`}}></div>
                stars.push(star)
            }
        }

        return stars
        
    }   

    useEffect(() => {
        const b_tr_stars = genStars("TR", "BLUE",blueStarsCount)
        const r_tr_stars = genStars("TR", "RED",redStarCount)
        
        const b_bl_stars = genStars("BL", "BLUE",blueStarsCount)
        const r_bl_stars = genStars("BL", "RED",redStarCount)

        setBlueStars({tr:b_tr_stars,bl:b_bl_stars})
        setRedStars({tr:r_tr_stars,bl:r_bl_stars})
        
        console.log(textControl.length)
    },[])
    return (
        <>  
            <ParticleBackground />
            {/* <SideEditPanel component={control} componentState={control == "IMAGE" ? imageControl[control.id] : textControl[control.id]} setComponentState={setImageControl} /> */}
            <SideEditPanel component={control.state} componentState={control.state == "TEXT" ? textControl[control.id] : imageControl[control.id]} setComponentState={(state: TextControl) => {
                if(control.state == "TEXT") updateState(control.id,setTextControl,state)
                else updateState(control.id,setImageControl,state)
            }} />
            <div className={styles.parentContainer}>
                <div className={styles.rightTopDecorations}>
                    {blueStars.tr.map((s,i) => (
                        <span key={i+0}>{s}</span>
                    ))}
                    {redStars.tr.map((s,i) => (
                        <span key={i+1}>{s}</span>
                    ))}
                </div>

                <div className={styles.bottomLeftDecorations}>
                {blueStars.bl.map((s,i)=> (
                        <span key={i+2}>{s}</span>
                    ))}
                    {redStars.bl.map((s,i) => (
                        <span key={i+3}>{s}</span>
                    ))}
                </div>
                <div className={styles.container}>
                    <div className={styles.image} onClick={() => selectImage(0)} style={{boxShadow: `-25px 25px 100px ${imageControl[0].shadowColor}`, borderWidth: `${imageControl[0].borderWidth}px`, borderColor: imageControl[0].borderColor}}>
                        <img src={PersonImage} />
                    </div>
                    
                    <div className={styles.parentTextContainer}>
                        <p onClick={() => selectText(0)} style={{color:textControl[0].color,fontWeight: textControl[0].bold ? "600" : "normal", textDecoration : textControl[0].underline ? "underline" : "none"}}>{textControl[0].text}</p>
                        <h1 onClick={() => selectText(1)} style={{color:textControl[1].color,fontWeight: textControl[1].bold ? "600" : "normal", textDecoration : textControl[1].underline ? "underline" : "none"}}>{textControl[1].text}</h1>
                        <h2 onClick={() => selectText(2)} style={{color:textControl[2].color,fontWeight: textControl[2].bold ? "600" : "normal", textDecoration : textControl[2].underline ? "underline" : "none"}}>{textControl[2].text}</h2>
                        <p className={styles.byLine} onClick={() => selectText(3)} style={{color:textControl[3].color,fontWeight: textControl[3].bold ? "600" : "normal", textDecoration : textControl[3].underline ? "underline" : "none"}}>{textControl[3].text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

// TODO: extract resuable components
export default BirthdayCard1