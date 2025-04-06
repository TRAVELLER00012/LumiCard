import apiClient from "./api-client"

export interface User{
    _id?:string,
    name:string,
    isAdmin:boolean       
}

const login = "/users"

class UserService{
    getUser(token:string){
        const controller = new AbortController()
        const req = apiClient.get<User>(login+"/me",{signal: controller.signal,headers:{"x-auth-token":token}})
        return {req, cancel: () => {controller.abort()} }
    }
}

export default UserService