import React,{Suspense} from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import superman from "../SVG/SuperMan.svg";
import study from "../SVG/Study.svg";
import live from "../SVG/Live.svg";
import Book from "../SVG/Book.svg";
// import LandingPageNavbar from "./LandingPageNavbar";
import  BottomNavbar from "../Navbar/BottomNavbar/BottomNavbar"
import Loader from "../Loader/CircularProgressWithLabel"
import Fade from "react-reveal/Fade"


const LandingPageNavbar = React.lazy(()=>import("./LandingPageNavbar.js"));


const LandingPage = () => {


  return (
    <>
      <Suspense fallback={Loader}>
      <LandingPageNavbar />
      </Suspense>
      <Box
        className="mainContainer"
         sx={{
          height: "100vh",
          widht: "100wh",
          display: "flex",
          // border: "1px solid black"
          // flexDirection:"column",
        
        }}
      >
        <Box
          position={"relative"}
          marginTop="5rem"
          id="Left"
          padding={"2rem"}
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1.3,
            // border:"2px solid black",
            // height:"100vh",
            // widht:"100wh"
          }}
        > 
          <Fade>

          <Typography className= "landpageTitle" variant="h3" padding={"3px"} fontFamily="Raleway" lineHeight={1} fontWeight={700} fontSize={"80px"}>
            Ready to boost up your Skills!
          </Typography>
          <div style={{ marginTop: "1rem" }} >
              <Typography
                sx={{ display: "inline", marginTop: "1rem" }}
                fontWeight={"700"}
                fontSize={"2rem"}
              >
                  SkillUp
              </Typography>
            <Typography
              variant="h5"
              sx={{ display: "inline", paddingX: "0.5rem", fontFamily:"Raleway",fontSize:"20px" }}
            >
              is a absolutely free and amazing platform for the children and students for
              enhancing their skills and gaining knowledge about the top trending skills around the world.
            </Typography>
          <Typography
            className="Quote"
            marginTop={"40px"}
            // position={"absolute"}
            bottom={"100px"}
            fontSize={"25px"}
            fontWeight={"600"}
          >
           <i>
              "Every skill you acquire doubles your odds of success."
             </i>
          </Typography>
          </div>
        </Fade>
        </Box>

        <Box
          id="Right"
          marginTop="6rem"
          sx={{
            display: "flex",
            flex: 1,
            // border:"2px solid black",
            // height:"100%",
            // widht:"100%"
          }}
          >


          <img
            className="superman"
            src={superman}
            width={"90%"}
            alt="Superman"
            display={"inline-block"}
            style={{
              zIndex: "2",
            }}
          />
        </Box>
      </Box>

{/* !-----------------------------SUPERMAN PART ENDED-----------------------------!  */}

        <div className="middleSection">
        
        <div className="middleSection_1">
          <Fade right delay>
           <div className="service_1">

              <img src={study} alt="videoLessons"  className="serviceImg" />
           </div>
            
            <div className="service1_text">
              <h1 className="service1_text_head" >Video Lessons</h1>
             <p className="landingText">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, aspernatur? Omnis numquam aperiam eligendi, enim hic officia, rem error sit sapiente nisi quae minima repellendus placeat eum aspernatur repudiandae. Error.
             </p>
        </div>
            </Fade>
          </div>
         
         
          <div className="middleSection_1">
            <Fade left delay>

            <div className="service1_text">
              <h1 className="service1_text_head" >One-One Sessions</h1>
             <p className="landingText">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, aspernatur? Omnis numquam aperiam eligendi, enim hic officia, rem error sit sapiente nisi quae minima repellendus placeat eum aspernatur repudiandae. Error.
             </p>
        </div>

           <div className="service_1">
              <img src={live} alt="videoLessons" id="liveImg" className="serviceImg"/>
           </div>
            </Fade>
            
          </div>




          <div className="middleSection_1">
            <Fade right delay>

           <div className="service_1">
              <img src={Book} alt="videoLessons" className="serviceImg" />
           </div>
            
            <div className="service1_text">
              <h1 className="service1_text_head" >Skills Oriented Articles</h1>
             <p className="landingText">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, aspernatur? Omnis numquam aperiam eligendi, enim hic officia, rem error sit sapiente nisi quae minima repellendus placeat eum aspernatur repudiandae. Error.
             </p>
        </div>
            </Fade>
          </div>
        </div>
        


    
        <BottomNavbar/>
    </>
  );
};

export default LandingPage;
