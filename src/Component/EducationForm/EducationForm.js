import React, { useState, useEffect,useContext } from "react";
import BottomNavbar from "../Navbar/BottomNavbar/BottomNavbar";
import {FormContext} from "../Context/DetailFormContext.js.js" 
import "./EducationForm.css";
import {
  FormControl,
  Box,
  Typography,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";


const schema = yup.object().shape({
  Qualification: yup.string().required(),
 Institute: yup.string().required(),
 InstituteState: yup.string().required(),
 InstituteCity: yup.string().required(),
 Achievement: yup.string(),
});


const EducationForm = () => {
  const {setshowEducationalForm} = useContext(FormContext);
  const [error,setError] = useState(false)
  const navigate = useNavigate();
  // const docReference = doc(db,"user",currentUser.uid)
  const [educationalDetails, setEducationalDetails] = useState({
    heighestQualification: "",
    institutionName: "",
    institutionCity: "",
    institutionState: "",
    Achievement: "",
  });

  const clickHandler = async (data) => {
      await setDoc(doc(db, "user", auth.currentUser.uid),data,{merge:true});
      navigate("/documentForm");
  }; 



 

   const {
     register,
     handleSubmit,
     formState: { errors },
     reset,
   } = useForm({
     resolver: yupResolver(schema),
   });
 
  //  const submitHandler = (data) => {
  //    console.log(data);
  //    reset();
  //  };

//   setTimeout(() => {
//     setError("");
//   }, [5000]);


  return (
    
    <>
    <Box 
    className="EduContainer"
    display={"flex"}
    margin={"3rem"}
    >

      <Box 
       display={"flex"}
       flex={1}
      >
         hi
      </Box>

    

    <Box
      sx={{
        // width: "80%",
        height: "auto",
        // border:"2px solid black",
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        padding: "0.5rem 0 1rem 0",
        boxShadow: 15,
      }}
      flex={0.7}
    >
      <Typography textAlign="center" style={{ marginBottom: "1rem",fontSize:"30px" }}>
        Educational Background
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <FormControl
        sx={{
          width: "100%",
          // height: "90%",
          margin: "auto",
          // padding: "1rem",
          alignItems:"center"
        }}
      >

<form className="personalDetailForm"
          onSubmit={handleSubmit(clickHandler)}
          style={{fontSize:"18px"}}
          >
        
        <label>Highest Qualification</label>        
        <input className="formInput"  placeholder="10th/12th/UG/PG" {...register("Qualification")} ></input>
        <p  className="errorMessage">{errors.Qualification?.message}</p>


        <label>Institute/School Name </label>
        <input 
          {...register("Institute")}
          placeholder="Institute Name"
          className="formInput"
        />
        <p className="errorMessage">{errors.Institute?.message}</p>

        <label>Institute State</label>
        <select {...register("InstituteState")} className="formInput">
        <option 
             value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
        </select>
        
         
        <p className="errorMessage">{errors.InstituteState && "Please Select your Institute City"}</p>


      <label>Institute City</label>
        <input 
          name="Institute City"
          
          {...register("InstituteCity")}
          className="formInput"
        />
        <p className="errorMessage">{errors.InstituteCity?.message}</p>

        <label>Any Achievement</label>
        <textarea 
          name="Achievement"
          placeholder="Anything of which you are proud of OR got recognised"
          {...register("Achievement")}
          // className="formInput"
          rows={10}
          cols={20}
          style={{padding:"10px",resize:"none",fontSize:"15px", outline:"none"}}
        />
        <p className="errorMessage">{errors.Achievement?.message}</p>

        <button  type="submit" style={{ width: "30%",height:"8%",fontSize:"15px", marginLeft: "65%", border:"none", backgroundColor:"purple",color:"white",padding:"5px",borderRadius:"5px" }}>
          Next
        </button>
      </form>
      </FormControl>
    </Box>
    </Box>
  <BottomNavbar/>  
  </>
  );
};

export default EducationForm;
