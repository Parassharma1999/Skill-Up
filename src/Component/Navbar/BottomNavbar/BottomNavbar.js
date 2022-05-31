import React from "react";
import "./BottomNavbar.css";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import {Fade} from "react-awesome-reveal";

import { Box, Typography } from "@mui/material";
const Navbar = () => {
  return (
    <Box className="bottomNavbar">
      <p className="bottomConnect">Connect with us</p>
      <Box  className="bttomNavbarIcons">
        <Fade left>
          <a
            style={{ color: "black" }}
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100005899144880"
          >
            <BsFacebook size={30} className="icon" />
          </a>
        </Fade>

        <Fade top>
          <a
            style={{ color: "black" }}
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/ParasKu27161805"
          >
            <BsTwitter size={30} className="icon" />
          </a>
        </Fade>

        <Fade bottom>
          <a
            style={{ color: "black" }}
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/__paras__sharma__/"
          >
            <BsInstagram size={30} className="icon" />
          </a>
        </Fade>

        <Fade right>
          <a
            style={{ color: "black" }}
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/paras-kumar-sharma-865106233/"
          >
            <BsLinkedin size={30} className="icon" />
          </a>
        </Fade>
      </Box>
      <p className="rights">
       Copyright 2022 SKILLUP - All rights reserved <br/> Created and Maintained by
        <a href="https://github.com/Parassharma1999" rel="noreferrer"  target="_blank" style={{color:"black",cursor:"pointer",textDecoration:"none"}}><b> Paras Kumar sharma</b></a>
      </p>
    </Box>
  );
};

export default Navbar;
