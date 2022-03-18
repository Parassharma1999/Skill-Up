import React,{useEffect,useRef,useState} from 'react'
import {Box,Typography,ListItem,List,ListItemButton,ListItemText,Divider} from '@mui/material'
import {Link,useNavigate} from "react-router-dom"
import { useAuth } from '../../AuthContext'
import { auth, db } from '../../firebase'
import {collection, doc,getDoc} from 'firebase/firestore'

const DropMenu = ({dropMenu,setDropMenu}) => {
  const {Logout,currentUser} = useAuth();
  const navigate = useNavigate();
  const [presentUserType,setPresentUserType] =useState() ;
  const docReference = doc(db,"user",auth.currentUser.uid)
  
  const ref =useRef();
// !-----------------------AUTHENTICATION FUNCTION (LOGOUT)--------------------!

async function logout(){
  try{
    await Logout();
    navigate("/signup");
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
  
   const docSnap = await getDoc(docReference);
    setPresentUserType(docSnap.data().userType);
  }

  document.addEventListener("mousedown", checkIfClickedOutside);
  getCurrentUser();

  return () => {
    // Cleanup the event listener
    document.removeEventListener("mousedown", checkIfClickedOutside);
  };
}, [dropMenu]);



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
            <Link to="/Profile"  style={{textDecoration:"none"}}>
            <ListItemButton>
               <ListItemText primary="Profile" />
            </ListItemButton>
            </Link>
          </ListItem>


          <ListItem  disablePadding={true}>
            <Link to="/EditProfile"  style={{textDecoration:"none"}}>
            <ListItemButton style={{width:'12.3rem'}}>
               <ListItemText primary="Edit Profile" style={{alignSelf:"center"}}/>
            </ListItemButton>
          </Link>
          </ListItem>

      {(localStorage.getItem("userType") === "Volunteer" || presentUserType==="Volunteer") && <ListItem disablePadding>
            <Link to="/createSession"  style={{textDecoration:"none"}}>
            <ListItemButton>
               <ListItemText primary="Create a Session" />
            </ListItemButton>
          </Link>
          </ListItem>
       }

           <ListItem  disablePadding={true}>
          <Link to="/Aboutus"  style={{textDecoration:"none"}}>
            <ListItemButton>
               <ListItemText primary="About us" />
            </ListItemButton>
          </Link>
          </ListItem> 
          


          <ListItem disablePadding>
            <ListItemButton onClick={logout}>
               <ListItemText primary="Logout"  />
            </ListItemButton>
          </ListItem> 
        </List>
        
    </Box>
    </Box>
  )
}

export default DropMenu