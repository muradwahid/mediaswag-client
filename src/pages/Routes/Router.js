import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";
import Profile from "../Layout/Profile";
import ProfileAbout from "../Layout/ProfileAbout";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import College from "../ViewProfile/About/College";
import Contact from "../ViewProfile/About/Contact";
import Education from "../ViewProfile/About/Education";
import ProfilePosts from "../ViewProfile/ProfilePosts/ProfilePosts";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <PrivetRoute><Main /></PrivetRoute>, children: [
        {path:'/',element:<Home/>}
    ] },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    {
        path: "/profile/:id", element: <Profile />, children: [
            {
                path: "about", element: <ProfileAbout/>, children: [
                    { path: "education", element: <Education /> },
                    { path: "contact", element: <Contact /> },
                    { path: 'education/education-add', element: <College /> }
                ]
            },
            { path: "posts", element: <ProfilePosts /> }
    ] }
])