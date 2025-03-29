import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Login from "../pages/Login/login";
import Register from "../pages/Register/register";
import Templates from "../pages/Templates/templates";

const router = createBrowserRouter([
    {path:"/", children:[
        {index:true,element: <App />},
        {path:"/login",element:<Login />},
        {path:"/register",element:<Register />},
        {path:"/templates",element:<Templates />},
    ]}
])

export default router