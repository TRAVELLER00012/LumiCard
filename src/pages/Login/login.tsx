import ParticleBackground from "../../components/Particles/particles"

import Email from "../../assets/images/mail.png"
import Padlock from "../../assets/images/padlock.png"

import styles from "./login.module.css"


const Login = () => {
  return (
    <>  
        <ParticleBackground />
        <div className={styles.containerParent}>
            <div className={styles.container}>
                <h1>Login</h1>
                <form>
                    <div className={styles.box}>
                        <label htmlFor="">Email</label>
                        <span>
                            <img src={Email} />
                            <input type="email" />
                        </span>
                    </div>

                    <div className={styles.box}>
                        <label htmlFor="">Password</label>
                        <span>
                            <img src={Padlock}/>
                            <input type="password" />
                        </span>
                    </div>
                    <div className={styles.buttons}>
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                    </div>
                </form>
                <div className={styles.options}>
                    <span><a href="/register">Register</a></span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login