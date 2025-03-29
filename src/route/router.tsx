import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Login from "../pages/Login/login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {path:"/", children:[
        {index:true,element: <App />},
        {path:"/login",element:<Login />},
        {path:"/register",element:<Register />}
    ]}
])

export default router