import ParticleBackground from "../../../components/Particles/particles"
import styles from "./starter.module.css"
import { useEffect, useState } from "react"


const Starter = () => {
    const blueStarsCount = 5
    const redStarCount = 5
    const [blueStars,setBlueStars] = useState<{tr:JSX.Element[],bl:JSX.Element[]}>({bl:[],tr:[]})
    const [redStars,setRedStars] = useState<{tr:JSX.Element[],bl:JSX.Element[]}>({bl:[],tr:[]})

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

    },[])
    return (
        <>  
            <ParticleBackground />
            <div className={styles.parentContainer}>
                <div className={styles.rightTopDecorations}>
                    {blueStars.tr.map(s => (
                        <span>{s}</span>
                    ))}
                    {redStars.tr.map(s => (
                        <span>{s}</span>
                    ))}
                </div>

                <div className={styles.bottomLeftDecorations}>
                {blueStars.bl.map(s => (
                        <span>{s}</span>
                    ))}
                    {redStars.bl.map(s => (
                        <span>{s}</span>
                    ))}
                </div>
                <div className={styles.container}>
                    <div className={styles.image}></div>
                    <div className={styles.parentTextContainer}>
                        <p>Sending Love Your Way</p>
                        <h1>Happy Birthday!</h1>
                        <h2>See you soon.</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Starter