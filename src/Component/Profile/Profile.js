import React,{useEffect,useState} from 'react'
import {Typography,Box,Card,Avatar,Button,Input,Svg} from '@mui/material'
import {useAuth} from '../../AuthContext'
import {auth,db} from '../../firebase'
import Navbar from '../Navbar/Navbar'
import {doc,getDocs} from 'firebase/firestore'

const Profile = () => {

console.log(auth.currentUser.emailVerified)

  return (
    <>
     <Navbar/>
    <Box 
    sx={{
      border:"3px solid black",
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
      alignItems:"center",
      minHeight:"50%",
      maxHeight:"100%",
      minwidth:"50%",
      maxwidth:"70%",
      margin:"2rem"
  }}>
    <Avatar
        src={auth.currentUser.photoURL}
        sx={{ width: 200, height: 200,fontSize:"6rem"}}
        />
  <Input accept="image/*" id="contained-button-file" multiple type="file" />
  <Button variant="contained" component="span">
    Upload
  </Button>
 

<Typography >Email: {auth.currentUser.email}</Typography>
<Typography >Username: {auth.currentUser.displayName}</Typography>
{/* <Typography>Email Verified: {auth.currentUser.emailVerified}</Typography> */}
<Typography >Mobile Number: {auth.currentUser.phoneNumber}</Typography>
</Box>
    </>
  )
}
export default Profile
