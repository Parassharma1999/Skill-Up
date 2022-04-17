import React,{useState,useEffect} from 'react'
import {Button,Box, Typography} from '@mui/material'
// import { useNavigate } from 'react-router-dom'
// import {useDispatch} from "react-redux"
import { db } from '../../firebase'
import "../Homepage.css"
import { collection, getDocs} from 'firebase/firestore'
import Navbar from '../Navbar/Navbar'

const Blogs = () => {

  const [article, setArticle] = useState([]);
 

  useEffect(()=>{  
   const getArticles = async()=>{
     const getData=[];
     const Snapshot = await getDocs(collection(db,"data"));
     Snapshot.forEach((doc)=>{
       getData.push({
         ...doc.data()
       })
      })
      setArticle(getData);
    }
     
  getArticles(); 
  

  return () => {           // useEffect CleanUp function
  
    setArticle([]);
  };
},[]) 
 
  return (
    <div>
       <Navbar />        
          <Typography variant="h3" marginX={"1rem"} marginTop={"5rem"}   marginBottom={"1rem"} >Blogs</Typography>
      <Box style={{
       marginBottom:"2rem",
       paddingX:'10%' 
      }}>
      {
        article.map((item,index)=>(
          <Box key={index}  margin={"1rem"} padding={"1rem"}  >
          <Box  display={"flex"} flexDirection={"column"} justifyContent={"center"} marginY={"2rem"}>
            <img src={item.image} alt="students" height={"50%"} width={"70%"} 
             style={{objectFit:"fill",margin:"0 auto"}} />

            
            <Typography variant="h5" marginY={"1rem"}>{item.Title}</Typography>

            <Box  overflow={"hidden"} display={"flex"} flexDirection={"column"} marginBottom={"0.2rem"}>
            <Typography textAlign={"justify"}>{item.article}</Typography>
            </Box>
            </Box>
          </Box>
        ))
      }
  </Box>
    </div>
  )
}

export default Blogs