import React,{useState} from 'react'
import {FormControl,Button,Typography,Alert,TextField,Box,MenuItem,Select,InputLabel} from "@mui/material"
import {doc, collection, addDoc,setDoc} from "firebase/firestore" 
import { auth,db} from '../../firebase'
import Navbar from '../Navbar/Navbar'
import { EventBusyTwoTone } from '@mui/icons-material'


const CreateSession = () => {
 const [message, setMessage] = useState(""); 
 const [error,setError] = useState(false);
 const [sessionElement, setSessionElement] = useState({
     link:"",
     duration:"",
     description:"",
     category:"",
     courseName:"",
     timing:""
 });

function durationHandler(event){
  setSessionElement((prevState)=>{
    return {
      ...prevState,
      duration: event.target.value
    }
  })
}


function categoryHandler(event){
  setSessionElement((prevState)=>{
    return {
      ...prevState,
      category: event.target.value
    }
  })
}

function descriptionHandler(event){
  setSessionElement((prevState)=>{
    return {
      ...prevState,
      description: event.target.value
    }
  })
}

function linkHandler(event){
  setSessionElement((prevState)=>{
    return {
      ...prevState,
      link: event.target.value
    }
  })
}



function courseNameHandler(event){
  setSessionElement((prevState)=>{
    return {
      ...prevState,
      courseName: event.target.value
    }
  })
}

 function TimingHandler(event){
  setSessionElement((prevState)=>{
    return {
      ...prevState,
      timing: event.target.value
    }
  })
}

const clickHandler = async()=>{

if(sessionElement.link !=="" && sessionElement.duration !=="" && sessionElement.category !=="" && sessionElement.courseName !=="")
 {
   await addDoc(collection(db, "session", auth.currentUser.uid,"sessionCollection"),sessionElement);
   await addDoc(collection(db, "totalSession"),sessionElement);
   setError(false);
   setMessage("Session Published");
}
else
{
  setError(true);
  setMessage("Please fill all neccessary details");
  return;
}
setSessionElement({
  link:"",
  duration:"",
  description:"",
  category:"",
  courseName:"",
})
}

console.log(sessionElement)

  return (
      <>
      <Navbar/>

      <Typography variant="h2" 
    sx={{
        display:"flex",
        justifyContent:"center",
        margin:"4rem 1rem 1rem 1rem"
        }}
        >Create a Session</Typography>
      
    <Box sx={{
      width:"50%",
      height:"auto",
      display:"flex",
      justifyItems:"center",
        // border:"2px solid black",
        margin:"auto",
        padding:"1rem",
        boxShadow:15
        }}>
          


    <FormControl sx={{
      width:"70%",
      height:"auto",
      display:"flex",
      justifyItems:"space-between",
      margin:"auto",
      padding:"1rem"
    }} >

          {error ?<Alert severity="error" style={{position:"absolute"}}>{message}</Alert> : <Alert severity="success" >{message}</Alert>}

<TextField
      label="Paste the Link here" 
      id="Link"
      value={sessionElement.link}
      onChange={linkHandler}
      sx={{margin:"1rem"}} 
      />

 {/* <TextField
      label="First Name" 
      id="First Name"
      sx={{margin:"1rem"}}
      /> */}

<TextField
      label="Course Name" 
      onChange={courseNameHandler}
      value={sessionElement.courseName}
      id="Couse Name"
      sx={{margin:"1rem"}}
      />

<TextField
      label="Starts At" 
      onChange={TimingHandler}
      value={sessionElement.timing}
      id="Couse Timing"
      sx={{margin:"1rem"}}
      />


    <FormControl style={{margin:"1rem"}}>
        <InputLabel>Session Duration</InputLabel>
        <Select
          value={sessionElement.duration}
          onChange={durationHandler}
          label="Session Duration"
        >

    
          <MenuItem value={"less than 1hr"} name="duration">less than 1hr</MenuItem>
          <MenuItem value={"1-2hr"} name="1-2hr">1-2hr</MenuItem>
          <MenuItem value={"2hr +"} name="2hr +">2hr +</MenuItem>
        </Select>
        </FormControl>


        <FormControl  style={{margin:"1rem"}}>
        <InputLabel>Category</InputLabel>
        <Select
          value={sessionElement.category}
          onChange={categoryHandler}
          label="Session Duration"
        >
          <MenuItem value={"Dance"} >Dance</MenuItem>
          <MenuItem value={"Music"} >Music</MenuItem>
          <MenuItem value={"Art & Design"} >Art & Design</MenuItem>
          <MenuItem value={"Cooking"} >Cooking</MenuItem>
          <MenuItem value={"Instrument playing"} >Instrument Playing</MenuItem>
          <MenuItem value={"Story Telling"} >Story Telling</MenuItem>
          {/* <MenuItem value={"Dance"} >Dance</MenuItem>
          <MenuItem value={"Dance"} >Dance</MenuItem>
          <MenuItem value={"Dance"} >Dance</MenuItem>
          <MenuItem value={"Dance"} >Dance</MenuItem> */}
        </Select>
        </FormControl>


 <TextField
          id="outlined-multiline-static"
          label="Description about the Session"
          onChange={descriptionHandler}
          value={sessionElement.description}
          multiline
          rows={8}
          sx={{margin:"1rem"}}
        />        
   
{/* <TextField
      label="School/College/University" 
      id="Phone No"
      sx={{margin:"1rem"}}
      required
      />

<TextField
      label="Class/Standard/Course" 
      id="Class"
      sx={{margin:"1rem"}}
      required */}
      {/* /> */}

<Button variant="outlined" style={{width:"30%",marginLeft:"65%"}} w="" onClick={clickHandler}>Save</Button>
    </FormControl>
    </Box>
    </>
  )
}

export default CreateSession