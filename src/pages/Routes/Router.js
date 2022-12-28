import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";
import Profile from "../Layout/Profile";
import ProfileAbout from "../Layout/ProfileAbout";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Contact from "../ViewProfile/About/Contact";
import Education from "../ViewProfile/About/Education";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
        {path:'/',element:<Home/>}
    ] },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    {
        path: "/profile/:id", element: <Profile />, children: [
            {
                path: "about", element: <ProfileAbout/>, children: [
                    { path: "education", element: <Education /> },
                    {path:"contact",element:<Contact/>}
            ]}
    ] }
])