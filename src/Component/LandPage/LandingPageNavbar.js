import React from 'react'
import { Link } from "react-router-dom";
import { Box, Typography, Button, Container } from "@mui/material";
const LandingPageNavbar = () => {
  return (
    <nav>
      <Box height={"4rem"} 
        display={"flex"}
        marginBottom={"2rem"} 
        >
        <Box className='Left' display={"flex"} flex={1} bgcolor={"lightgrey"}>

        </Box>
        <Box className='middle' display={"flex"} flex={2} bgcolor={"lightgrey"}>

</Box>
    <Box className ="Right" padding={"1rem"}  display={"flex"} justifyContent={"space-around"} flex={1} flexDirection={"row-reverse"}> 
      <Link to="/signup" style={{textDecoration:"none",color:"black"}}><Button variant='outlined' color="inherit"  >Sign Up/Log In</Button></Link>
    </Box>
        </Box>
    </nav>
  )
}

export default LandingPageNavbar