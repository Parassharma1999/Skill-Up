import React,{useState,createContext} from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Component/SignUp";
import ForgetPassword from "./Component/ForgetPassword";
import { AuthProvider } from "./AuthContext";
// import { auth } from "./firebase";
// import { useAuth } from "./AuthContext";
// import Navbar from "./Component/Navbar/Navbar";
import AboutUs from "./Component/AboutUs/AboutUs";
import HomePage from "./Component/HomePage";
import Profile from "./Component/Profile/Profile";
import EditProfile from "./Component/Profile/EditProfile";
import LandingPage from "./Component/LandPage/LandingPage";
import CreateSession from "./Component/CreateSession/CreateSession";
// import PrivateRouteAboutus from "./Component/PrivateRoutes/PrivateRouteAboutus";
// import PrivateRouteHomepage from "./Component/PrivateRoutes/PrivateRouteHomepage";
// import PrivateRouteProfile from "./Component/PrivateRoutes/PrivateRouteProfile";
// import PrivateRouteEditProfile from "./Component/PrivateRoutes/PrivateRouteEditProfile";
import Article from "./Component/Article/Article";
import ConfirmPage from "./Component/ConfirmPage";
import Blogs from "./Component/Blogs/Blogs";
import Videos from "./Component/Videos/Videos";
import LiveSession from "./Component/LiveSessions/LiveSession";
import { FormContext } from "./Component/Context/DetailFormContext.js";
import PersonalDetailForm from "./Component/PersonalForms/PersonalDetailForm";
import EducationForm from "./Component/EducationForm/EducationForm";
import DocumentForm from "./Component/DocumentForm/DocumentForm";
import SingleBlog from "./Component/Blogs/SingleBlog";

import { ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme({
  typography:{
    fontFamily:["Montserrat","sans-serif"].join(","),
  }
});

export const singleBlog = createContext();


const App = () => {
  
  const [singleBlogDetail, setSingleBlogDetail] = useState({
    title:null,
    text:null,
    image:null
  })

  const [showPersonaldetailForm, setshowPersonaldetailForm] = useState(false);
  const [showEducationForm, setshowEducationForm] = useState(false);
 
  return (
    <ThemeProvider theme={theme}>
      <singleBlog.Provider value={{singleBlogDetail,setSingleBlogDetail}}>
      <FormContext.Provider value={{
        showPersonaldetailForm,
        showEducationForm, 
       setshowPersonaldetailForm,
       setshowEducationForm
      }}>

      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/Homepage" element={<HomePage />} />
          <Route
            path="/Aboutus"
            element={
              // <PrivateRouteAboutus>
              <AboutUs />
              // </PrivateRouteAboutus>
            }
            />
          <Route
            path="/Profile"
            element={
              // <PrivateRouteProfile>
              <Profile />
              // </PrivateRouteProfile>
            }
          />
          <Route
            path="/EditProfile"
            element={
              // <PrivateRouteEditProfile>
              <EditProfile />
              // </PrivateRouteEditProfile>
            }
            />
          <Route path="/Homepage/article" element={<Article />} />
          <Route path="/confirm" element={<ConfirmPage />} />
          <Route
            path="/blogs"
            element={
              // <PrivateRouteEditProfile>
              <Blogs />
              // </PrivateRouteEditProfile>
            }
            />

            <Route path="/videos" element={<Videos/>}/>
 
           <Route path="singleBlog" element={<SingleBlog/>}  />

          <Route path="/Homepage/videos" element={<ConfirmPage />} />

          <Route path="/CreateSession" element={<CreateSession />} />
        
          <Route path="/liveSessions" element={<LiveSession />} />
          <Route path="/personalForm" element={<PersonalDetailForm/>} />
          <Route path="/educationForm" element={<EducationForm/>} />
          <Route path="/documentForm" element={<DocumentForm/>} />

        </Routes>
      </AuthProvider>
  </FormContext.Provider>
  </singleBlog.Provider>
    </ThemeProvider>
  );
};

export default App;
