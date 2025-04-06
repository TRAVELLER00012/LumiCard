import {jwtDecode} from "jwt-decode";

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
