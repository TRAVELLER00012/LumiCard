import { useEffect, useState } from "react"
import star_styles from "../css/stars.module.css"

const useStars = (styles:CSSModuleClasses = star_styles,star1Count: number = 5, star2Count : number = 5) =>{
    const [star1,setStar1] = useState<{tr:JSX.Element[],bl:JSX.Element[]}>({bl:[],tr:[]})
    const [star2,setStar2] = useState<{tr:JSX.Element[],bl:JSX.Element[]}>({bl:[],tr:[]})

    useEffect(() =>{
        const b_tr_stars = genStars("TR", "STAR1",star1Count,styles)
        const r_tr_stars = genStars("TR", "STAR2",star2Count,styles)
        
        const b_bl_stars = genStars("BL", "STAR1",star1Count,styles)
        const r_bl_stars = genStars("BL", "STAR2",star2Count,styles)
    
        setStar1({tr:b_tr_stars,bl:b_bl_stars})
        setStar2({tr:r_tr_stars,bl:r_bl_stars})
    },[])

    return [star1,star2]
}

const genStars = (position : "TR" | "BL", type : "STAR1" | "STAR2", count : number , styles : CSSModuleClasses) =>{
    const stars: JSX.Element[] = []
    if(position ==  "TR"){
        for (let i = 0; i < count; i++){
            const randRight =  Math.floor(Math.random() * (30 -5 + 1)) +5
            const randTop =  Math.floor(Math.random() * (25 -5 +1)) +5;
            const randSpeed = Math.floor(Math.random() * (10-5+1) + 5)
            let star = <div></div>;
            if(type == "STAR1") star = <div className={[styles.star,styles.starTR,styles.star1,`star${i}`].join(" ")} style={{top:`${randTop}%`,right:`${randRight}%`,animationDuration:`${randSpeed}s`}}></div>
            else star = <div className={[styles.star,styles.starTR,styles.star2,`star${i}`].join(" ")} style={{top:`${randTop}%`,right:`${randRight}%`,animationDuration:`${randSpeed}s`}}></div>
            stars.push(star)
        }

    }
    else{
        for (let i = 0; i < count; i++){
            const randLeft =  Math.floor(Math.random() * (30 -5 + 1)) +5
            const randBottom =  Math.floor(Math.random() * (25 -5 +1)) +5;
            const randSpeed = Math.floor(Math.random() * (10-5+1) + 5)
            let star = <div></div>;
            if(type == "STAR1") star = <div className={[styles.star,styles.starBL,styles.star1,`star${i}`].join(" ")} style={{bottom:`${randBottom}%`,left:`${randLeft}%`,animationDuration:`${randSpeed}s`}}></div>
            else star = <div className={[styles.star,styles.starBL,styles.star2,`star${i}`].join(" ")} style={{bottom:`${randBottom}%`,left:`${randLeft}%`,animationDuration:`${randSpeed}s`}}></div>
            stars.push(star)
        }
    }

    return stars
}   



export default useStars