import ParticleBackground from "../../components/Particles/particles"

import Email from "../../assets/images/mail.png"
import Padlock from "../../assets/images/padlock.png"
import User from "../../assets/images/user.png"

import styles from "./register.module.css"
import { FormEvent, useRef } from "react"
import { UserRegister } from "../../services/auth-service"
import Loading from "../../components/Loading/Loading"
import useRegister from "../../hooks/useRegister"

const Register = () => {

    const {register,error,setError,loading,setLoading} = useRegister()

    const firstName = useRef<HTMLInputElement>(null)
    const lastName = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null) 
    const confirmPassword = useRef<HTMLInputElement>(null)
    
    const submit = (event : FormEvent) =>{
        event.preventDefault()
        if(firstName.current && lastName.current && email.current && password.current && confirmPassword.current && password.current.value == confirmPassword.current.value){
            console.log(password.current.value)
            const user : UserRegister = {
                name : `${firstName.current.value} ${lastName.current.value}`,
                email: email.current.value,
                password : password.current.value
            }
            register(user)
        }else setError(true)
    }

    return (
    <>  
        <ParticleBackground />
        <div className={styles.containerParent}>
            <div className={styles.container}>
                <h1>Register</h1>
                {error && <p className="error">Some Error Occurred</p>}
                {loading && <Loading />}
                <form onSubmit={submit} onReset={() => {setError(false); setLoading(false)}}>
                    <div className={styles.box}>
                        <label htmlFor="firstName">First Name</label>
                        <span>
                            <img src={User} />
                            <input type="text" id="firstName" ref={firstName}/>
                        </span>
                    </div>

                    <div className={styles.box}>
                        <label htmlFor="lastName">Last Name</label>
                        <span>
                            <img src={User} />
                            <input type="text" id="lastName" ref={lastName}/>
                        </span>
                    </div>

                    <div className={styles.box}>
                        <label htmlFor="email">Email</label>
                        <span>
                            <img src={Email} />
                            <input type="email" id="email" ref={email}/>
                        </span>
                    </div>

                    <div className={styles.box}>
                        <label htmlFor="password">Password</label>
                        <span>
                            <img src={Padlock}/>
                            <input type="password" id="password" ref={password}/>
                        </span>
                    </div>

                    <div className={styles.box}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <span>
                            <img src={Padlock}/>
                            <input type="password" id="confirmPassword" ref={confirmPassword}/>
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