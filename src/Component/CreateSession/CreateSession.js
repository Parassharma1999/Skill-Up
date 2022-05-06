import React,{useState,useRef} from 'react'
import {FormControl,Button,Typography,Alert,TextField,Box,MenuItem,Select,InputLabel} from "@mui/material"
import {doc, collection, addDoc,setDoc} from "firebase/firestore" 
import { auth,db} from '../../firebase'
import './CreateSession.css'
import Navbar from '../Navbar/Navbar'
import { EventBusyTwoTone } from '@mui/icons-material'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import emailjs from "@emailjs/browser";

const schema = yup.object().shape({
  Link: yup.string().url().required(),
  CourseName: yup.string().required(),
  StartTime: yup.string().required(),
  SessionDate: yup.string().required(),
  SessionDuration: yup.string().required(),
  Category: yup.string().required(),
  Description:yup.string().required()
});

const CreateSession = () => {

  const [message, setMessage] = useState("");
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

const clickHandler = async(data)=>{

  try{
    await addDoc(collection(db, "session", auth.currentUser.uid,"sessionCollection"),data);
    await addDoc(collection(db, "totalSession"),data);
    // setError(false);

    emailjs
    .sendForm(
      'service_104p747',
      'template_cpzkvnl',  
      form.current,
       "ikLWHXZ9RHkW4rHe9"
    )
    .then(()=>{
      setMessage("Session Published");
    }

    )
    reset();
  }
catch(error)
{
  // setError(true);
  console.log(error)
  return;
}
console.log(form)
}

  return (
      < div className='createSessionWrapper'>
      <Navbar/>

      <Typography variant="h2" 
    sx={{
        display:"flex",
        justifyContent:"center",
        margin:"6rem 1rem 1rem 1rem"
        }}
        >Create a Session</Typography>

        {message && <Alert severity='success'>{message}</Alert>}
      
      <div className='createSessionContainer'>
      <form
        onSubmit={handleSubmit(clickHandler)}
        className="formContainer"
        ref = {form}
      >
        <input type="text" name="volunteerEmail" className='Email' defaultValue={auth.currentUser.email} />
        <input type="text" name="volunteerName" className="Name" defaultValue={auth.currentUser.displayName} />
        
        <label style={{fontWeight:"500"}}>Paste Session Link here</label>
        <div>

        <input className='SessionLink'
          type="text"
          placeholder="Paste Zoom, Google, WebX etc meeting link..."
          {...register("Link")} 
          name="Link"
          />
        <p className='errorMessage'>{errors.Link?.message}</p>
          </div>



        <label style={{fontWeight:"500"}}>Course Name </label>
        <div>
        <input className='SessionCourseName' {...register("CourseName")} placeholder="Course Name..." name='CourseName'/>
        <p className='errorMessage'>{errors.CourseName?.message}</p>
        
        </div>

        <label style={{fontWeight:"500"}}>Choose Date</label>
        <div>
        <input className='SessionDate' name="Date" type="date" {...register("SessionDate")} />
        <p className='errorMessage'>{errors.SessionDate?.message}</p>

        </div>

          <label style={{fontWeight:"500"}}> Session Timings </label>
        <div className='sessionTiming'>
          <div>
            <div style={{fontSize:"15px",fontWeight:"500",width:"100%",color:"grey"}}  >Starting time : </div>
            <input className='SessionTime'
              type="time"
              name="Time"
              // placeholder=""
              {...register("StartTime")}

            />
            <p style={{color:"red",fontSize:"12px",width:"100%"}} >{errors.StartTime?.message}</p>
          </div>

          <div>
          <div style={{fontSize:"15px",fontWeight:"500",color:"grey"}} >Session Duration </div>
          <select className='SessionDuration' placeholder="User Type..." {...register("SessionDuration")} name="Duration">
          <option value={"less than 1hr"}>Less than 1hr</option>
          <option value={"1hr - 2hr"}>1hr - 2hr</option>
          <option value={"2hr+"}>2hr+</option>
        </select>
            <p className='errorMessage'>{errors.SessionDuration?.message}</p>
          </div>
        </div>

     
        <label style={{fontWeight:"500"}} >Category</label>
        <div>
          <select className="SessionCategory" placeholder="Category" {...register("Category")} name='Category'>
          <option value={"Dance"} >Dance</option>
          <option value={"Music"} >Music</option>
          <option value={"Art & Design"} >Art & Design</option>
          <option value={"Cooking"} >Cooking</option>
          <option value={"Instrument playing"} >Instrument Playing</option>
          <option value={"Story Telling"} >Story Telling</option>
        </select>
        <p className='errorMessage'>{errors.Category?.message}</p>
        </div>




        <label style={{fontWeight:"500"}}>Description</label>
        <div>
        <textarea
          className='SessionTextarea'
          rows={15}
          cols={10}
          style={{resize:"none"}}
          placeholder="Tell learners something about the skills they'll get to grab and your teaching methodology..."
          {...register("Description")}
          name="Description"
          />
        <p className='errorMessage'>{errors.Description?.message}</p>
          </div>
     
       

     <div className='formBottom'>
     <button className='resetButton' onClick={()=>{reset()}} >
          Reset
        </button>
         <button className='createButton' type="submit" >
          Create Session
        </button>
     </div>

      </form>
    </div>
    </div>
  )
}

export default CreateSession