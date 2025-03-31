import Navbar from "../../components/Navbar/navbar"
import ParticleBackground from "../../components/Particles/particles"
import styles from "./templates.module.css"
import {BC1_COVER} from "./images"
import { useNavigate } from "react-router-dom"
const Templates = () => {


    return (
    <>
        <Navbar items={[
            {name:"Birthday",hrefV:"#birthdayCards"},
        ]} />
        <ParticleBackground />

        <div className={styles.container}>

            <div className={styles.theme} id="birthdayCards">
                <h2 className="heading-h2">Birthday Cards</h2>
                <div className={styles.themeList}>
                    <Card coverImg={BC1_COVER}/>
                </div>
            </div>
        </div>
    </>
  )
}

const Card = ({coverImg}:{coverImg:string}) =>{
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.card} onClick={() => navigate("bc1")}>
               <img src={coverImg}/>
            </div>
        </>
    )
}


export default Templates