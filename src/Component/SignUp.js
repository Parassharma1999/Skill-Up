import React, { useState } from "react";
import {
  Typography,
  TextField,
  Box,
  FormControl,
  Alert,
  Button
} from "@mui/material";

import { auth, GoogleAuth, FacebookAuth } from "../firebase";
import LoadingButton from "@mui/lab/LoadingButton";
import { useAuth } from "../AuthContext";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Signup from "./SVG/Signup.svg";



const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { signInWithGoogle, signInWithFacebook, sendEmailLink } = useAuth();
  const signup = async (e) => {
    e.preventDefault();
    setLoading(!loading);

      try {
        setError("");
        await sendEmailLink(auth, registerEmail);
        setMessage("Please check your Email to proceed further");
      }
        catch (error) {
        setError(error.code);
        console.log(error);
      }
    
    setLoading(false);
  };

  const GoogleSignIn = async () => {
      try {
        const GoogleUser = await signInWithGoogle(auth, GoogleAuth);
        setLoading(!loading);
        // navigate("/Homepage", { replace: true });
      } catch (error) {
        setLoading(false);
        console.log(error);
      
    }
  };

  const FacebookSignIn = async () => {
    setLoading(!loading);
      try {
        const FacebookUser = await signInWithFacebook(auth, FacebookAuth);
        // navigate("/Homepage", { replace: true });
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

  setTimeout(() => {
    setError("");
    setMessage("");
  }, [5000]);


  return (
    <Box
      sx={{
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        flexDirection: "row",
        height: "100vh",
        width: "100wh",
        top: "10rem",
      }}
    >
      <Box
        className="Left"
        display="flex"
        justifyItems="center"
        alignItems="center"
        flexDirection="column"
        flex={1}
      >
        <Typography variant="h4" textAlign={"center"}>
          Welcome To SkillUp Family !
        </Typography>
        <img
          src={Signup}
          alt="Signup"
          height={"70%"}
          width={"70%"}
          // border={"2px solid black"}
        />
      </Box>

      <Box
        className="Right"
        flex={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //  border:"2px solid black"
        }}
      >
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "30rem",
            height: "auto",
            // justifyContent:"center",
            // alignItems:"center",
            boxShadow: 8,
            bgcolor: "white",
            p: 2,
            // marginTop:"5rem"
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, alignSelf: "center" }}>
            Sign Up/Log In
          </Typography>

          {error && (
            <Alert severity="error" style={{ marginBottom: "1rem" }}>
              {error}
            </Alert>
          )}
          {message && (
            <Alert severity="success" style={{ marginBottom: "1rem" }}>
              {message}
            </Alert>
          )}

        

          <Box
            display="flex"
            alignSelf={"center"}
            flexDirection={"column"}
            minHeight='8rem'
            width={"80%"}
            height={"4rem"}
            padding={"1rem"}
            justifyContent={"space-between"}
          >

          <Button variant="outlined" onClick={GoogleSignIn}>
            <FcGoogle
              sx={{ m: 2, width: "10px", height: "10px" }}
              // variant="contained"
              // color="primary"
              style={{margin:"0 1rem 0 -1rem" }}
              size={30}
              />
            Continue with Google
         </Button>

           
         <Button variant="outlined" onClick={FacebookSignIn} >
            <BsFacebook
              // variant="contained"
              // color="primary"
              size={30}
              style={{margin:"0 1rem 0 0"}}
            />
             Continue with Facebook
         </Button>
          </Box>


          <Box display={"flex"} margin={"0.5rem"}>
            <hr color={"lightgrey"} width={"40%"} />
            OR
            <hr color={"lightgrey"} width={"40%"} />
          </Box>

          <TextField
            label="Email"
            name="email"
            type={"email"}
            margin="dense"
            sx={{ width: "100%" }}
            onChange={(e) => setRegisterEmail(e.target.value)}
            required
          />

          <LoadingButton
            loading={loading}
            type={"submit"}
            variant="contained"
            sx={{ width: "30%", alignSelf: "center", m: "1rem" }}
            onClick={signup}
          >
            Sign up
          </LoadingButton>

        </FormControl>
      </Box>
    </Box>
  );
};

export default SignUp;
