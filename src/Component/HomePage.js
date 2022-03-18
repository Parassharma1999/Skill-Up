import React,{useState,useEffect} from 'react'
import {Button,Box, Typography, Container} from '@mui/material'
// import { useNavigate } from 'react-router-dom'
// import {useDispatch} from "react-redux"
import {db} from "../firebase"
import { collection, getDocs} from 'firebase/firestore'
import Navbar from './Navbar/Navbar'
// import {OpenArticle} from './Reducers/ArticleReducer' 

const HomePage = () => {

  // const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [article, setArticle] = useState([]);
  // const dispatch = useDispatch();


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
     const getVideos = async()=>{
      const getVideo=[];
      const Snapshot = await getDocs(collection(db,"video"));
      Snapshot.forEach((doc)=>{
        getVideo.push({
          ...doc.data()
        })
      })
      setVideos(getVideo);
    }
  getArticles(); 
  getVideos();

  return () => {           // useEffect CleanUp function
    getArticles();
    getVideos();
    setVideos([]);
    setArticle([]);
  };
},[]) 

  // const ArticleHandler=(index,Title,data)=>{
  //    console.log(index,Title,data);
  //    dispatch(OpenArticle(Title));
  //    navigate("/Homepage/article");
  //  }
  
  return (
    <div>
       <Navbar />        
          <Typography variant="h3" display={"flex"} flexDirection={"column"} marginX={"1rem"} marginTop={"5rem"}   marginBottom={"1rem"} >Blogs</Typography>

      <Box style={{
       display:"grid",
       gridTemplateColumns:"auto auto auto",
       marginBottom:"2rem",
       paddingX:'10%' 
      }}>
      {
        article.map((item,index)=>(
          <Box key={index}  margin={"1rem"} padding={"1rem"} bgcolor={"Lavender"} >
          <Box  display={"flex"} flexDirection={"column"} justifyContent={"center"} marginY={"2rem"}>
            <Box border={"2px solid violet"} bgcolor={"rebeccapurple"} width="100%" height="15rem">
            <img src={item.image} alt="Image" height={"100%"} width={"100%"}
             style={{objectFit:"fill"}} />
            </Box>

            
            <Typography variant="h5" marginY={"1rem"}>{item.Title}</Typography>

            <Box height={"100px"} overflow={"hidden"} display={"flex"} flexDirection={"column"} marginBottom={"0.2rem"}>
            <Typography textAlign={"justify"}>{item.article}</Typography>
            </Box>
            <Button variant={"contained"} 
            // onClick={()=>ArticleHandler(index,item.Title,item.article)}
             sx={{width:"50%",marginX:"auto",position:"static"}}>Read More...</Button>
            </Box>
          </Box>
        ))
      }
  </Box>


  <Typography variant="h3" display={"flex"} flexDirection={"column"} marginX={"1rem"} marginTop={"5rem"} marginBottom={"rem"}>Video Courses</Typography>

<Box style={{
 display:"grid",
 gridTemplateColumns:"auto auto auto"
}}>
{
  videos.map((item,index)=>(
    <Box key={index}  margin={"1rem"} padding={"1rem"} bgcolor={"Lavender"} >
    <Box  display={"flex"} flexDirection={"column"} justifyContent={"center"} marginY={"2rem"}>
      <Box border={"2px solid violet"} bgcolor={"rebeccapurple"} width="100%" height="15rem">
      <img src={item.piclink} alt="Image" height={"100%"} width={"100%"}
       style={{objectFit:"fill"}} />
      </Box>

      <Box height={"100px"} overflow={"hidden"} display={"flex"} flexDirection={"column"} marginBottom={"0.2rem"}>
      <Typography textAlign={"justify"} marginTop={"1%"}>{item.info}</Typography>
      </Box>
         
     
     <Button variant="contained" sx={{width:"40%",marginX:"auto"}}>
     <a href={item.link} target="_blank" style={{textDecoration:"none",color:"white"}}>Go to Video</a> 
     </Button>

      </Box>
    </Box>
  ))
}
</Box>
    </div>
  )
}

export default HomePage