import { useNavigate } from "react-router-dom";
import authService, { UserLogin } from "../services/auth-service";
import { setToken } from "../services/token";
import { useState } from "react";

export default function useLogin(){
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    
    const login = (user:UserLogin) =>{
        const {req} = authService.login(user)
        setLoading(true)
        req.then(res =>{
            const token = res.data
            setToken(token)
            navigate("/templates")
        }).catch(() => setError(true))
        .finally(() =>setLoading(false))

    }
    return {login,error,setError,loading,setLoading}
}