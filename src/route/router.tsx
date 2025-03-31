import { createBrowserRouter } from "react-router-dom";
import {App,Login,Register,Templates,BirthdayCard1} from "./index"

const router = createBrowserRouter([
    {path:"/", children:[
        {index:true,element: <App />},
        {path:"/login",element:<Login />},
        {path:"/register",element:<Register />},
        {path:"/templates",children:[
            {index:true,element:<Templates />},
            {path:"bc1",element:<BirthdayCard1 />}
        ]},
    ]}
])

export default router