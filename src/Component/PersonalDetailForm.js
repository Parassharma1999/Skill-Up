import React,{useState,useEffect} from 'react'
import {
  FormControl,
  Box,
  TextField,
  Button, 
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  Alert,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {doc,setDoc} from "firebase/firestore"
import {db} from '../firebase'
import { useAuth } from '../AuthContext'
import { auth } from '../firebase'

const PersonalDetailForm = () => {
    const navigate = useNavigate();
    const currentUser = useAuth();
  // const docReference = doc(db,"user",currentUser.uid)
  const [fullname, setFullname] = useState("")
  const [gender, setGender] = useState("")
  const [phoneno, setPhoneno] = useState("")
  const [error, setError] = useState("")
  const [userType, setUserType] = useState("");

useEffect(()=>{
return()=>{
  setFullname("")
  setGender("")
  setPhoneno("")
}
},[])

     const clickHandler = async()=>{ 
       if(fullname!=="" && phoneno!=="" && gender!=="")
       { navigate("/Homepage");
        await setDoc(doc(db, "user", auth.currentUser.uid), {
          name:fullname,
          phoneno:phoneno,
          gender:gender,
          userType:localStorage.getItem("userType")
        });
      }
    else
    {
      setError("please fill all details")
    }
    }

  function changeHandler(e) {
    setUserType(e.target.value);
    localStorage.setItem("userType", e.target.value);
  }

  
  setTimeout(() => {
    setError("");
  }, [5000]);

  console.log(fullname)
  console.log(gender)
  console.log(phoneno)
  console.log(userType)

  return (
    <Box sx={{
        width:"80%",
        height:"auto",
        // border:"2px solid black",
        display:"flex",
        flexDirection:"column",
        justifyItems:"center",
        margin:"auto",
        padding:"1rem",
        boxShadow:15
        }}>

  <Typography variant="h4" textAlign="center" sx={{marginBottom:"1rem"}}>Personal Details</Typography>

   {error && <Alert severity='error'>{error}</Alert>}


    <FormControl sx={{
        width:"90%",
        height:"auto",
        margin:"auto",
        padding:"1rem"
        }} >

<FormControl style={{ width: "50%", alignSelf: "center" }} required>
            <InputLabel>User Type</InputLabel>
            <Select value={userType} onChange={changeHandler} label="User Type">
              <MenuItem value="Learner" name="Learner">
                Learner
              </MenuItem>
              <MenuItem value="Volunteer" name="Volunteer">
                Volunteer
              </MenuItem>
            </Select>
          </FormControl>

 <TextField
      required
      label="Full Name" 
      id="Full Name"
      sx={{margin:"1rem"}}
      value={fullname}
      onChange={(e)=>{setFullname(e.target.value)}}
      />

<FormControl style={{marginLeft:"1rem"}} >
      <FormLabel 
      required
      >Gender</FormLabel>
      <RadioGroup row onChange={(e)=>{setGender(e.target.value)}}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>


<TextField
      label="Phone No" 
      id="Phone No"
      sx={{margin:"1rem"}}
      value={phoneno}
      onChange={(e)=>{setPhoneno(e.target.value)}}
      required
      />   
   
<Button variant="outlined" style={{width:"30%",marginLeft:"65%"}} onClick={clickHandler}>Next</Button>
    </FormControl>
    </Box>
  )
}

export default PersonalDetailForm