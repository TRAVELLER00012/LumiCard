import { useNavigate } from "react-router-dom";
import authService, { UserRegister } from "../services/auth-service";
import { setToken } from "../services/token";
import { useState } from "react";

export default function useRegister(){
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    
    const register = (user:UserRegister) =>{
        const {req} = authService.register(user)
        setLoading(true)
        req.then((res) =>{
            const token = res.headers["x-auth-token"]
            if(token) {
                setToken(token)
                navigate("/templates")
            }
        }).catch(() => setError(true))
        .finally(() =>setLoading(false))
    }
    return {register,error,setError,loading,setLoading}
}