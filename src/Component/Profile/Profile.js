import React, { useEffect, useState } from "react";
import {BiEdit} from "react-icons/bi"
import {Link, useNavigate} from "react-router-dom"
import {
  Typography,
  Box,
  Card,
  Avatar,
  Button,
  Input,
  Svg,
} from "@mui/material";
import { useAuth } from "../../AuthContext";
import { auth, db } from "../../firebase";
import Navbar from "../Navbar/Navbar";
import { doc, getDoc, getDocs } from "firebase/firestore";

const Profile = () => {
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();
  const {deleteUsers,Logout} = useAuth();

  useEffect(() => {
    const getData = async () => {
      const Data = await getDoc(doc(db, "user", auth.currentUser.uid));
      // Data.forEach((item)=>{
      //  Information.push(
      //    {
      //      ...item.data()
      //    }
      //  )
      // })
      setInfo(Data.data());
    };

    if(auth.currentUser.uid){
    getData();
    }
    else
    return;
    
    return () => {
      getData();
    };
  }, []);

   const deleteHandler = async()=>{
      await deleteUsers();
      navigate("/");
   }


  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent:"center",
          margin: "2rem auto",
          width:"80%",
          backgroundColor:"lightgoldenrodyellow",
          padding:"2rem 5rem",
          boxShadow: "2px 5px 15px 2px grey"

        }}
      >
      <Link to="/EditProfile">
        <BiEdit size={20} style={{position:"static", left:"100%", cursor: "pointer",color:"black"}} />
      </Link>
        
        <Box
          className="Left"
          flex={0.5}
          justifyContent={"center"}
          alignItems={"center"}
          padding={ "2rem auto"}
        >
          <Avatar
            src={auth.currentUser.photoURL}
            sx={{ width: 200, height: 200, fontSize: "6rem" }}
          />
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </Box>

        <Box
          className="Right"
          display={"Flex"}
          flexDirection={"column"}
          flex={1}
         
          >
          <Box height={"70%"} width={"80%"}
           padding={"1rem"}
           margin={"0 auto"}>    
             <Typography variant="h4">Personal Details</Typography>
          <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
             

          <Typography><b>Email:</b>  {auth.currentUser.email}</Typography>
          <Typography><b>Username:</b>  {auth.currentUser.displayName}</Typography>
          <Typography ><b>Mobile Number:</b> {info.PhoneNo}</Typography>
          <Typography ><b>Gender:</b> {info.Gender}</Typography>
           </Box>
          {/* <Typography>Email Verified: {auth.currentUser.emailVerified}</Typography> */}
          </Box>


       
       
        <Box height={"50%"} width={"80%"} margin={"0 auto"} padding={"1rem"} >    
             <Typography variant="h4">Educational Background</Typography>
          <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
 

          <Typography><b>Heighest Qualification:</b>  {info.Qualification}</Typography>
          <Typography ><b>Institution Name:</b> {info.Institute}</Typography>
          <Typography><b>Institution City:</b>  {info.InstituteCity}</Typography>
          <Typography><b>Institution State:</b>  {info.InstituteState}</Typography>
          </Box>
          {/* <Typography>Email Verified: {auth.currentUser.emailVerified}</Typography> */}
        </Box>
          <Typography><b>Account Type:</b>{info.UserType}</Typography>

          <Button onClick={deleteHandler}>Delete</Button>
        
        



    </Box>
      </Box>
    </>
  );
};
export default Profile;
