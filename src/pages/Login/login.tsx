import ParticleBackground from "../../components/Particles/particles"

import Email from "../../assets/images/mail.png"
import Padlock from "../../assets/images/padlock.png"

import styles from "./login.module.css"
import { FormEvent, useRef } from "react"
import { UserLogin } from "../../services/auth-service"
import useLogin from "../../hooks/useLogin"
import Loading from "../../components/Loading/Loading"


const Login = () => {

    const {login,error,setError,loading,setLoading} = useLogin()

    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const submit = (e : FormEvent) =>{
        e.preventDefault()
        if(email.current && password.current){
            const user : UserLogin = {
                email: email.current.value,
                password: password.current.value
            }
            login(user)
        }else setError(true)
    }

    return (
    <>  
        <ParticleBackground />
        <div className={styles.containerParent}>
            <div className={styles.container}>
                <h1>Login</h1>
                {error && <p className="error">Some Error Occurrred</p>}
                {loading && <Loading />}
                <form onSubmit={submit} onReset={() => {setLoading(false);setError(false)}}>
                    <div className={styles.box}>
                        <label htmlFor="email">Email</label>
                        <span>
                            <img src={Email} />
                            <input type="email" id="email" ref={email} required/>
                        </span>
                    </div>

                    <div className={styles.box}>
                        <label htmlFor="password">Password</label>
                        <span>
                            <img src={Padlock}/>
                            <input type="password" id="password" ref={password} required/>
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