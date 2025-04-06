import Navbar from "../../components/Navbar/navbar"
import ParticleBackground from "../../components/Particles/particles"
import styles from "./templates.module.css"
import {BC1_COVER,OB1_COVER} from "./images"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useVerfiy } from "../../services/token"
const Templates = () => {
    const verify = useVerfiy()
    useEffect(() => {verify()})

    return (
    <>
        <Navbar items={[
            {name:"Birthday",hrefV:"#birthdayCards"},
            {name:"Occasion Based",hrefV:"#occasionBasedCards"},
        ]} projects={true}/>
        <ParticleBackground />

        <div className={styles.container}>

            <div className={styles.theme} id="birthdayCards">
                <h2 className="heading-h2">Birthday Cards</h2>
                <div className={styles.themeList}>
                    <Card coverImg={BC1_COVER} loc="bc1"/>
                </div>
            </div>
            <div className={styles.theme} id="occasionBasedCards">
                <h2 className="heading-h2">Occasion Based Cards</h2>
                <div className={styles.themeList}>
                    <Card coverImg={OB1_COVER} loc="ob1"/>
                </div>
            </div>
        </div>
    </>
  )
}

const Card = ({coverImg,loc}:{coverImg:string,loc:string}) =>{
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.card} onClick={() => navigate(loc)}>
               <img src={coverImg}/>
            </div>
        </>
    )
}


export default Templates