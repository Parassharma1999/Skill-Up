import React from "react";
import "./BottomNavbar.css"
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
const Navbar = () => {
  return (
    <Box className="bottomNavbar">
      <Typography variant="h5">Connect with us</Typography>
      <Box display="flex" width={"20%"} justifyContent={"space-between"}>
          <a style={{color:"black"}} target="_blank"  rel="noreferrer" href="https://www.facebook.com/profile.php?id=100005899144880">
          <BsFacebook size={30}   className="icon"/>
          </a> 
       <a style={{color:"black"}} target="_blank"  rel="noreferrer" href="https://twitter.com/ParasKu27161805">
         <BsTwitter  size={30}  className="icon"/>
         </a> 
        <a style={{color:"black"}} target="_blank"  rel="noreferrer" href="https://www.instagram.com/__paras__sharma__/">
          <BsInstagram  size={30} className="icon" />
          </a>
       <a style={{color:"black"}} target="_blank"  rel="noreferrer" href="https://www.linkedin.com/in/paras-kumar-sharma-865106233/">
          <BsLinkedin  size={30}  className="icon"/>
         </a>
      </Box>
      <Typography>All rights Reserved to SkillUp | Created and Maintained <b>Paras Kumar sharma</b> </Typography>
    
    </Box>
  );
};

export default Navbar;
