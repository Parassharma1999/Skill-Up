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
const LandingPageNavbar = React.lazy(()=>import("./LandingPageNavbar.js"));


const LandingPage = () => {


  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
          marginTop="6rem"
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
          <Typography variant="h3" padding={"3px"}>
            Ready to boost up your Skills!
          </Typography>
          <div sx={{ marginTop: "1rem" }}>
            <Link to="/Homepage">
              <Typography
                sx={{ display: "inline", marginTop: "1rem" }}
                fontWeight={"medium"}
                fontSize={"2rem"}
              >
                <mark style={{ padding: "3px", borderRadius: "10%" }}>
                  SKILLUP
                </mark>
              </Typography>
            </Link>
            <Typography
              variant="h5"
              sx={{ display: "inline", paddingX: "0.5rem" }}
            >
              is a amazing platform for the children of 12 - 18 years for
              enhancing there skills Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptas assumenda sed qui repudiandae dolorem
              accusamus omnis fugit voluptate blanditiis. Sapiente!
            </Typography>
          <Typography
            className="Quote"
            variant="h4"
            marginTop={"40px"}
            // position={"absolute"}
            bottom={"100px"}
            fontWeight={"500"}
          >
            "Every skill you acquire doubles your odds of success."
          </Typography>
          </div>
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
           <div className="service_1">
              <img src={study} alt="videoLessons"  className="serviceImg" />
           </div>
            
            <div className="service1_text">
              <h1 className="service1_text_head" >Video Lessons</h1>
             <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, aspernatur? Omnis numquam aperiam eligendi, enim hic officia, rem error sit sapiente nisi quae minima repellendus placeat eum aspernatur repudiandae. Error.
             </p>
        </div>
          </div>
         
         
          <div className="middleSection_1">
            <div className="service1_text">
              <h1 className="service1_text_head" >One-One Sessions</h1>
             <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, aspernatur? Omnis numquam aperiam eligendi, enim hic officia, rem error sit sapiente nisi quae minima repellendus placeat eum aspernatur repudiandae. Error.
             </p>
        </div>

           <div className="service_1">
              <img src={live} alt="videoLessons" id="liveImg" className="serviceImg"/>
           </div>
            
          </div>




          <div className="middleSection_1">
           <div className="service_1">
              <img src={Book} alt="videoLessons" className="serviceImg" />
           </div>
            
            <div className="service1_text">
              <h1 className="service1_text_head" >Skills Oriented Articles</h1>
             <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, aspernatur? Omnis numquam aperiam eligendi, enim hic officia, rem error sit sapiente nisi quae minima repellendus placeat eum aspernatur repudiandae. Error.
             </p>
        </div>
          </div>
        </div>
        


    
        <BottomNavbar/>
    </>
  );
};

export default LandingPage;
