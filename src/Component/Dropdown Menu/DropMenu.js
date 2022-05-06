import React,{useEffect,useRef,useState,useContext} from 'react'
import {Box,ListItem,List,ListItemButton,ListItemText} from '@mui/material'
import {Link,useNavigate} from "react-router-dom"
import { useAuth } from '../../AuthContext'
import { auth, db } from '../../firebase'
import { doc,getDoc} from 'firebase/firestore'
import {FormContext} from "../Context/DetailFormContext.js"


const DropMenu = ({dropMenu,setDropMenu}) => {
  const {Logout} = useAuth();
  const navigate = useNavigate();
  const [presentUserType,setPresentUserType] =useState();
  
      const {setshowEducationForm} = useContext(FormContext) 

  const ref =useRef();
// !-----------------------AUTHENTICATION FUNCTION (LOGOUT)--------------------!

async function logout(){
  try{
    await Logout();
    navigate("/");
    setshowEducationForm(false);
  }
  catch(error)
  {
    console.log(error);
  }
}


useEffect(() => {
  const checkIfClickedOutside = (e) => {
    if (dropMenu && ref.current && !ref.current.contains(e.target)) {
      setDropMenu(false);
    }
  };

  const getCurrentUser = async() =>{
  
   const docSnap = await getDoc(doc(db,"user",auth.currentUser.uid));
    setPresentUserType(docSnap.data().UserType);
  }

  document.addEventListener("mousedown", checkIfClickedOutside);
  getCurrentUser();

  return () => {
    // Cleanup the event listener
    document.removeEventListener("mousedown", checkIfClickedOutside);
    setPresentUserType();
  };
},[]);



return (

    <Box position={"absolute"} top={"3.3rem"} left={"83%"} ref={ref} >
    <Box sx={{ 
    width:200,
    bgcolor: 'lavenderblush',
    position:"absolute",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:"5%"
  }}>
      
       <List>
          <ListItem  disablePadding={true}>
            <Link to="/Profile"  style={{textDecoration:"none",color:"black"}}>
            <ListItemButton style={{width:"12.3rem",textAlign:"center"}}>
               <ListItemText primary="Profile" />
            </ListItemButton>
            </Link>
          </ListItem>


          {/* <ListItem  disablePadding={true}>
            <Link to="/EditProfile"  style={{textDecoration:"none",color:"black"}}>
            <ListItemButton style={{width:"12.3rem",textAlign:"center"}}>
               <ListItemText primary="Edit Profile" style={{alignSelf:"center"}}/>
            </ListItemButton>
          </Link>
          </ListItem> */}

      {(localStorage.getItem("userType") === "Volunteer" || presentUserType==="Volunteer") && <ListItem disablePadding>
            <Link to="/createSession"style={{textDecoration:"none",color:"black"}}>
            <ListItemButton style={{width:"12.3rem",textAlign:"center"}}>
               <ListItemText primary="Create a Session" />
            </ListItemButton>
          </Link>
          </ListItem>
       }

           <ListItem  disablePadding={true}>
          <Link to="/Aboutus"  style={{textDecoration:"none",color:"black"}}>
            <ListItemButton style={{width:"12.3rem",textAlign:"center"}}>
               <ListItemText primary="About us" />
            </ListItemButton>
          </Link>
          </ListItem> 
          


          <ListItem disablePadding>
            <ListItemButton onClick={logout}>
               <ListItemText primary="Logout" style={{textAlign:"center"}} />
            </ListItemButton>
          </ListItem> 
        </List>
        
    </Box>
    </Box>
  )
}

export default DropMenu