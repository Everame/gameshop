import React from "react";
import {
    createBrowserRouter
} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage/>
    }
])

