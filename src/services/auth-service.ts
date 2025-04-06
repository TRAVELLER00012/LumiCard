import apiClient from "./api-client"
import { User } from "./user-service"

export interface UserLogin{
    email:string,
    password:string
}

export interface UserRegister{
    name : string,
    email : string,
    password : string
}

const loginUrl = "/auth"
const registerUrl = "/users"

class AuthService{
    login(user: UserLogin){
        const controller = new AbortController()
        const req = apiClient.post<string>(loginUrl,user,{signal:controller.signal})
        return {req,cancel: () => {controller.abort()}}
    }

    register(user:UserRegister){
        const controller = new AbortController()
        const req = apiClient.post<User>(registerUrl,user,{signal:controller.signal})
        return {req,cancel : () => {controller.abort()}}
    }
}

export default AuthService