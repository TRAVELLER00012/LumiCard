import {jwtDecode} from "jwt-decode";
import { useNavigate } from "react-router-dom";

const LOCAL_KEY = "token";

export default function useToken() {
    const t = getToken();
    if (t) {
        try {
            const decoded = jwtDecode(t);
            return decoded;
        } catch (e) {
            return null;
        }
    }
    return null;
}

export function setToken(token: string) {
    localStorage.setItem(LOCAL_KEY, token);
}

export function getToken() {
    return localStorage.getItem(LOCAL_KEY);
}

export function useVerfiy(){
    const navigate = useNavigate()
    const verify = () =>{
        const userObj = useToken()
        if (userObj != null && ("_id" in userObj) ) return userObj
        navigate("/login")
        return null
    }
    return verify
}