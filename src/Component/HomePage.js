import React,{useState,useEffect,useContext} from 'react'
import {Button,Box, Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom'
// import {useDispatch} from "react-redux"
import {db} from "../firebase"
import "./Homepage.css"
import { collection, getDocs} from 'firebase/firestore'
import Navbar from './Navbar/Navbar'
import BottomNavbar from "./Navbar/BottomNavbar/BottomNavbar"
// import {OpenArticle} from './Reducers/ArticleReducer' 
import {singleBlog} from "../App"

const HomePage = () => {
  const {singleBlogDetail, setSingleBlogDetail} =useContext(singleBlog);

  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
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
    setVideos([]);
    setArticle([]);
  };
},[]) 

  const ArticleHandler=(index,Title,data,Image,Date)=>{
     console.log(index,Title,data);
     setSingleBlogDetail({
       title:Title,
       text:data,
       image:Image,
       time:String( Date.toDate().toLocaleTimeString('en-US')),
       date:Date.toDate().toDateString()

     })

     navigate("/Homepage/singleBlog")
   }

   console.log(article[0]);
  
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
          <Box key={index} className="content" margin={"1rem"} padding={"1rem"}  >
          <Box  display={"flex"} flexDirection={"column"} justifyContent={"center"} marginY={"2rem"}>
            <Box border={"2px solid violet"} bgcolor={"rebeccapurple"} width="100%" height="15rem">
            <img src={item.image} alt="students" height={"100%"} width={"100%"}
             style={{objectFit:"fill"}} />
            </Box> 

            
            <Typography variant="h5" marginY={"1rem"}>{item.Title}{item.date}</Typography>

            <Box height={"100px"} overflow={"hidden"} display={"flex"} flexDirection={"column"} marginBottom={"0.2rem"}>
            <Typography textAlign={"justify"}>{item.article}</Typography>
            </Box>
            <Button variant={"contained"} 
            onClick={()=>ArticleHandler(index,item.Title,item.article,item.image,item.Date)}
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
    <Box key={index}  className="content" margin={"1rem"} padding={"1rem"} marginBottom={"10rem"} >
    <Box  display={"flex"} flexDirection={"column"} justifyContent={"center"} marginY={"2rem"}>
      <Box border={"2px solid violet"} bgcolor={"rebeccapurple"} width="100%" height="15rem">
      <img src={item.piclink} alt="alt" height={"100%"} width={"100%"}
       style={{objectFit:"fill"}} />
      </Box>

      <Box height={"100px"} overflow={"hidden"} display={"flex"} flexDirection={"column"} marginBottom={"0.2rem"}>
      <Typography textAlign={"justify"} marginTop={"1%"}>{item.info}</Typography>
      </Box>
         
     
     <Button variant="contained" sx={{width:"40%",marginX:"auto"}}>
     <a href={item.link} target="_blank" rel="noreferrer" style={{textDecoration:"none",color:"white"}}>Go to Video</a> 
     </Button>

      </Box>
    </Box>
  ))
}
</Box>

 <BottomNavbar/>
    </div>
  )
}

export default HomePage