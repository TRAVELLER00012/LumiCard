import ParticleBackground from "../../components/Particles/particles"

import Email from "../../assets/images/mail.png"
import Padlock from "../../assets/images/padlock.png"
import User from "../../assets/images/user.png"

import styles from "./register.module.css"


const Register = () => {
  return (
    <>  
        <ParticleBackground />
        <div className={styles.containerParent}>
            <div className={styles.container}>
                <h1>Register</h1>
                <form>
                    <div className={styles.box}>
                        <label htmlFor="firstName">First Name</label>
                        <span>
                            <img src={User} />
                            <input type="text" id="firstName"/>
                        </span>
                    </div>

                    <div className={styles.box}>
                        <label htmlFor="lastName">Last Name</label>
                        <span>
                            <img src={User} />
                            <input type="text" id="lastName"/>
                        </span>
                    </div>
  
                    <div className={styles.box}>
                        <label htmlFor="email">Email</label>
                        <span>
                            <img src={Email} />
                            <input type="email" id="email" />
                        </span>
                    </div>

                    <div className={styles.box}>
                        <label htmlFor="password">Password</label>
                        <span>
                            <img src={Padlock}/>
                            <input type="password" id="password"/>
                        </span>
                    </div>

                    <div className={styles.box}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <span>
                            <img src={Padlock}/>
                            <input type="password" id="confirmPassword"/>
                        </span>
                    </div>
                    <div className={styles.buttons}>
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                    </div>
                </form>
                <div className={styles.options}>
                    <span><a href="/login">Login</a></span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register