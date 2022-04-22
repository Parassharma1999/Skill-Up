import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import DeleteModal from "../Modal/DeleteModal";
import "./Profile.css";
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
import { SetMeal } from "@mui/icons-material";

const Profile = () => {
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();
  const { deleteUsers, Logout } = useAuth();

  useEffect(() => {
    const getData = async () => {
      const Data = await getDoc(doc(db, "user", auth.currentUser.uid));
      setInfo(Data.data());
    };

    if (auth.currentUser.uid) {
      getData();
    } else return;

    return () => {
      getData();
    };
  }, []);

  const deleteHandler = async () => {
    setIsModalOpen(true);
    // await deleteUsers();
    // navigate("/");
  };

  return (
    <>
      <Navbar />
      {isModalOpen && <DeleteModal closeModal={setIsModalOpen}/>}
      
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          margin: "4.2rem auto",
          width: "80%",
          padding: "2rem 5rem",
          boxShadow: "2px 5px 15px 2px grey",
        }}
      >
        <Link to="/EditProfile">
          <BiEdit
            size={20}
            style={{
              position: "static",
              left: "100%",
              cursor: "pointer",
              color: "black",
            }}
          />
        </Link>

        <Box
          className="Left"
          flex={0.5}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={"2rem auto"}
          flexDirection="column"
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

          <p style={{ marginTop: "1rem",fontSize:"20px"}}>Account Type: &nbsp;<b> {info.UserType}</b></p>
        </Box>

        <Box
          className="Right"
          display={"Flex"}
          flexDirection={"column"}
          flex={1}
        >
          <Box
            height={"70%"}
            width={"80%"}
            padding={"1rem"}
            margin={"0 auto"}
            display={"flex"}
            flex={0.5}
            flexDirection={"column"}
          >
            <Typography variant="h4">Personal Details</Typography>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              flexDirection={"column"}
              flexWrap={"wrap"}
            >
              <hr />

              <p className="infoTitle"> 
              <b style={{fontWeight:"600"}}>
                 Email:
                </b>
               &nbsp;{auth.currentUser.email}
              </p>
              <p className="infoTitle">
               <b style={{fontWeight:"600"}}>
                  Username:
                 </b>
                &nbsp; {auth.currentUser.displayName}
              </p>
              <p className="infoTitle">
               <b style={{fontWeight:"600"}}>
                  Mobile Number:
                 </b>
                 &nbsp;{info.PhoneNo}
                </p>
              <p className="infoTitle">
               <b style={{fontWeight:"600"}}>
                  Gender:
                 </b>
                &nbsp;  {info.Gender}
                </p>
            </Box>
            {/* <Typography>Email Verified: {auth.currentUser.emailVerified}</Typography> */}
          </Box>

          <Box
            height={"50%"}
            width={"80%"}
            margin={"0 auto"}
            padding={"1rem"}
            display={"flex"}
            flex={0.5}
            flexDirection={"column"}
          >
            <Typography variant="h4">Educational Background</Typography>
            <Box
              display={"flex"}
              flexWrap={"wrap"}
              flexDirection={"column"}
              justifyContent="space-evenly"
            >
              <hr />

              <p className="infoTitle">
              <b style={{fontWeight:"600"}}>
                  Highest Qualification:
                </b>
             &nbsp;    {info.Qualification}
              </p>
              <p className="infoTitle">
               <b style={{fontWeight:"600"}}>
                  Institution Name: 
                 </b>
              &nbsp;{info.Institute}</p>
              <p className="infoTitle">
               <b style={{fontWeight:"600"}}>
                  Institution City:
                 </b>
              &nbsp;   {info.InstituteCity}
              </p>
              <p className="infoTitle">
               <b style={{fontWeight:"600"}}>
                  Institution State:
                 </b>
              &nbsp;   {info.InstituteState}
              </p>
            </Box>
            {/* <Typography>Email Verified: {auth.currentUser.emailVerified}</Typography> */}
          </Box>

          <Button onClick={deleteHandler}>Delete</Button>
        </Box>
      </Box>
    </>
  );
};
export default Profile;
