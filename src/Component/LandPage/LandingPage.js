import React from 'react'
import './LandingPage.css'
import {Link} from 'react-router-dom'
import {Box,Container, Typography} from '@mui/material'
import superman from '../SVG/SuperMan.svg'
import LandingPageNavbar from './LandingPageNavbar'
const LandingPage = () => {
  return (
    <>
    <LandingPageNavbar/>
  <Box
  sx={{
    height:"100vh",
    widht:"100wh",
    display:"flex",
    // flexDirection:"column",
    }}>  
    <Box 
      id="Left"
      padding={"2rem"}
      sx={{
      display:"flex",
      flexDirection:"column",
      flex:1.3,
      // border:"2px solid black",
      // height:"100vh",
      // widht:"100wh"
    }}
       marginTop={"3rem"}>
      <Typography variant="h3" padding={"3px"}  color="initial">Ready to boost up your Skills!</Typography>
      <div sx={{marginTop:"1rem"}}>
      <Link to="/Homepage"><Typography color="initial" sx={{display:"inline",marginTop:"1rem"}} fontWeight={"medium"} fontSize={"2rem"}><mark style={{padding:"3px",borderRadius:"10%"}}>SKILLUP</mark></Typography></Link>
      <Typography variant="h5" sx={{display:"inline",paddingX:"0.5rem"}} color="initial">is a amazing platform for the children of 12 - 18 years for enhancing there skills Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas assumenda sed qui repudiandae dolorem accusamus omnis fugit voluptate blanditiis. Sapiente!
      </Typography>
        </div>
    </Box>

    <Box
      id="Right"
    sx={{
      display:"flex",
      flex:1,
      // border:"2px solid black",
      // height:"100%",
      // widht:"100%"
      }}>
    <img className="superman" src={superman} width={"485rem"} alt="Superman Image" display={"inline-block"} />
    </Box>
        </Box>
    </>
  )
}

export default LandingPage