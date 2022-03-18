import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import SignUp from './Component/SignUp'
import ForgetPassword from "./Component/ForgetPassword"
import { AuthProvider } from './AuthContext'
import { auth } from './firebase'
import { useAuth } from './AuthContext'
import Navbar from './Component/Navbar/Navbar'
import AboutUs from './Component/AboutUs'
import HomePage from './Component/HomePage'
import Profile from './Component/Profile/Profile'
import EditProfile from './Component/Profile/EditProfile'
import LandingPage from './Component/LandPage/LandingPage'
import BottomNavbar from "./Component/Navbar/BottomNavbar/BottomNavbar"
import PrivateRouteAboutus from './Component/PrivateRoutes/PrivateRouteAboutus'
import PrivateRouteHomepage from './Component/PrivateRoutes/PrivateRouteHomepage'
import PrivateRouteProfile from './Component/PrivateRoutes/PrivateRouteProfile'
import PrivateRouteEditProfile from './Component/PrivateRoutes/PrivateRouteEditProfile'
import Article from './Component/Article/Article'
import ConfirmPage from './Component/ConfirmPage'
const App = () => {
  return (
    <div>
    <AuthProvider>
    <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/signUp" element={<SignUp/>}/>
    <Route path="/forget-password" element={<ForgetPassword/>}/>
    <Route path="/Homepage" element={<HomePage/>}/>          
    <Route path="/Aboutus" element={<PrivateRouteAboutus><AboutUs/></PrivateRouteAboutus>}/>
    <Route path="/Profile" element={<PrivateRouteProfile><Profile/></PrivateRouteProfile>}/>
    <Route path="/EditProfile" element={<PrivateRouteEditProfile><EditProfile/></PrivateRouteEditProfile>}/>
    <Route path="/Homepage/article" element={<Article/>}/>
    <Route path="/confirm" element={<ConfirmPage/>}/>
    </Routes>  
    <BottomNavbar/>
    </AuthProvider>
    </div>
  ) 
} 

export default App