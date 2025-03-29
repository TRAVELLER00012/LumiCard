import Navbar from "../../components/Navbar/navbar"
import ParticleBackground from "../../components/Particles/particles"
import styles from "./templates.module.css"

const Templates = () => {
  return (
    <>
        <Navbar items={[
            {name:"theme1",hrefV:"#theme1"},
            {name:"theme2",hrefV:"#theme2"}
        ]} />
        <ParticleBackground />

        <div className={styles.container}>

            <div className={styles.theme} id="theme1">
                <h2 className="heading-h2">Theme 1</h2>
                <div className={styles.themeList}>
                    <div style={{background:"yellow",width:400,height:300}}></div>
                    <div style={{background:"yellow",width:400,height:300}}></div>
                    <div style={{background:"yellow",width:400,height:300}}></div>
                </div>
            </div>

            <div className={styles.theme} id="theme2">
                <h2 className="heading-h2">Theme 2</h2>
                <div className={styles.themeList}>
                    <div style={{background:"yellow",width:400,height:300}}></div>
                    <div style={{background:"yellow",width:400,height:300}}></div>
                    <div style={{background:"yellow",width:400,height:300}}></div>
                </div>
            </div>



        </div>
    </>
  )
}

export default Templates