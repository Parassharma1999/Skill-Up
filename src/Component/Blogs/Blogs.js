import React,{useState,useEffect,useContext} from 'react'
import {Button,Box, Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom'
// import {useDispatch} from "react-redux"
import { db } from '../../firebase'
import "../Homepage.css"
import {singleBlog} from "../../App"
import { collection, getDocs} from 'firebase/firestore'
import Navbar from '../Navbar/Navbar'
import {FcSearch} from "react-icons/fc"
import "./Blog.css"



const Blogs = () => {

  const [article, setArticle] = useState([]);
  const {singleBlogDetail, setSingleBlogDetail} =useContext(singleBlog);
  const navigate = useNavigate();
 

    const ArticleHandler=(index,Title,data,Image,Date)=>{
    //  console.log(index,Title,data);
     setSingleBlogDetail({
       title:Title,
       text:data,
       image:Image,
       time:String( Date.toDate().toLocaleTimeString('en-US')),
       date:Date.toDate().toDateString()

     })
     navigate("/Homepage/singleBlog")
    }

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

console.log(article);
 
  return (
    <div>
       <Navbar />   
         <div className='searchBar'>
             <input type="text" placeholder='Search Something...' style={{display:"flex",alignItems:"center"}} />
           <FcSearch className='searchIcon'/>
           </div>     
           
          {/* <Typography variant="h3" marginX={"1rem"} marginTop={"5rem"}   marginBottom={"1rem"} >Blogs</Typography>
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
  </Box> */}

<Box style={{
 display:"grid",
 gridTemplateColumns:"auto auto auto",
 marginBottom:"2rem",
 marginTop:"2rem",
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

    </div>
  )
}

export default Blogs