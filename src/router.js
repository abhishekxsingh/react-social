import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./forms/login"
import Signup from "./forms/signup";


const ReactRouter = () => {

    const [profile, setProfile] = useState({})

    const router = createBrowserRouter([
        {
          path: "/",
          element: <div>Hello world!</div>,
        },
        // {
        //   path: "/profile",
        //   element: <Profile/>,
        // },
        {
            path: "/Login",
            element: <Login/>,
          },
      
      ]);
      

    return <RouterProvider router={router} />
}

export default ReactRouter;