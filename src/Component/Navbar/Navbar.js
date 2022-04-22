import React, { useState,useEffect } from "react";
import './Navbar.css'
import { NavLink,Link } from "react-router-dom";
import { Box, Typography,Avatar } from "@mui/material";
import { auth } from "../../firebase"; 
import DropMenu from '../Dropdown Menu/DropMenu'
const Navbar = () => {
 const [dropMenu, setDropMenu]=useState(false);
 
//  useEffect(()=>{
//    return ()=>{
//    setDropMenu(false);
//    }
//  },[])
 
  return (
    <>
      <Box
        sx={{
          height: "4rem",
          // borderBottom: "3px solid black",
          position:"fixed",
          width:"100%",
          zIndex:"100",
          top:0,
          backgroundColor: "rgba(255, 255, 255, 0.266)",
          backdropFilter: "blur(10px)",
          display: "flex",
          justifyContent: "space-around",
          alignItems:"center",
          // position:"fixed",
          // top:"0",
          // width:"100%"
        }}
      > 
      <Box className="Left" width={"30%"}>
      </Box>

      <Box className="Right" 
      sx={{ 
         width:"50%",
         display: "flex",
         justifyContent: "space-around",
         alignItems:"center",
         
        }}> 

        <Link to="/Homepage" style={{textDecoration:"none"}} activeClassName="activeLink">
          <Typography className="borderAnimation" variant="h6" 
          // sx={{color:"black"}}
          
          >
            Home
          </Typography>
        </Link>

        <Link to="/Homepage/blogs"  style={{textDecoration:"none"}} activeClassName="activeLink">
          <Typography variant="h6"
          className="borderAnimation"
           sx={{color:"black"}}
           >
             Blogs
          </Typography>
        </Link>


        <Link to="/liveSessions" style={{textDecoration:"none"}} activeClassName="activeLink">
          <Typography variant="h6" 
          className="borderAnimation" 
          sx={{
            color:"black",
            }} 
           >
            Live Session
          </Typography>
        </Link>


        <Avatar className="Avatar" src={auth.currentUser.photoURL} sx={{border:"0.3px solid black"}} 
        onClick={()=>{setDropMenu(!dropMenu)}}
         />
      </Box>
      </Box>
        {dropMenu && <DropMenu dropMenu={dropMenu} setDropMenu={setDropMenu}/>}
    </>
  );
};

export default Navbar;
