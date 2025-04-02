import { useEffect, useState } from "react"
import star_styles from "../css/stars.module.css"

const useStars = (styles:CSSModuleClasses = star_styles,blueStarsCount: number = 5, redStarsCount : number = 5) =>{
    const [blueStars,setBlueStars] = useState<{tr:JSX.Element[],bl:JSX.Element[]}>({bl:[],tr:[]})
    const [redStars,setRedStars] = useState<{tr:JSX.Element[],bl:JSX.Element[]}>({bl:[],tr:[]})

    useEffect(() =>{
        const b_tr_stars = genStars("TR", "BLUE",blueStarsCount,styles)
        const r_tr_stars = genStars("TR", "RED",redStarsCount,styles)
        
        const b_bl_stars = genStars("BL", "BLUE",blueStarsCount,styles)
        const r_bl_stars = genStars("BL", "RED",redStarsCount,styles)
    
        setBlueStars({tr:b_tr_stars,bl:b_bl_stars})
        setRedStars({tr:r_tr_stars,bl:r_bl_stars})
    },[])

    return [blueStars,redStars]
}

const genStars = (position : "TR" | "BL", type : "BLUE" | "RED", count : number , styles : CSSModuleClasses) =>{
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



export default useStars