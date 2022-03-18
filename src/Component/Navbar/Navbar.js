import React, { useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import { Box, Typography,Avatar } from "@mui/material";
import { useAuth } from "../../AuthContext";
import { auth } from "../../firebase"; 
import DropMenu from '../Dropdown Menu/DropMenu'

const Navbar = () => {
 const {currentUser} = useAuth();
 const [dropMenu, setDropMenu]=useState(false);
 

  return (
    <>
      <Box
        sx={{
          height: "4rem",
          borderBottom: "3px solid black",
          bgcolor: "lightblue",
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

        <Link to="/Homepage" style={{textDecoration:"none"}}>
          <Typography className="borderAnimation" variant="h6" sx={{color:"black"}}>
            Home
          </Typography>
        </Link>

        <Link to=""  style={{textDecoration:"none"}}>
          <Typography variant="h6"
          className="borderAnimation"
           sx={{color:"black"}}>
             Blogs
          </Typography>
        </Link>


        <Link to="" style={{textDecoration:"none"}}>
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
        onClick={()=>{setDropMenu(!dropMenu)}} />
      </Box>
      </Box>
        {dropMenu && <DropMenu dropMenu={dropMenu} setDropMenu={setDropMenu}/>}
    </>
  );
};

export default Navbar;
