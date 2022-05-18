import React, { useState, useEffect, useContext } from "react";
import { button, div, p } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import {useDispatch} from "react-redux"
import { db } from "../../firebase";
import "../Homepage.css";
import { singleBlog } from "../../App";
import { collection, getDocs,query,where} from "firebase/firestore";
import Navbar from "../Navbar/Navbar";
import { FcSearch } from "react-icons/fc";
import Fade from "react-reveal/Fade";

import "./Blog.css";

const Blogs = () => {
  const [article, setArticle] = useState([]);
  const [noDataMessage, setNoDataMessage] = useState("");
  const [categorySelect,setCategorySelected] = useState(false);
  
  const { singleBlogDetail, setSingleBlogDetail } = useContext(singleBlog);
  const navigate = useNavigate();
  const Category = ["Cooking", "Computer science","Music","Dance"];

  const ArticleHandler = (Title, data, Image, Date) => {
    //  console.log(index,Title,data);
    setSingleBlogDetail({
      title: Title,
      text: data,
      image: Image,
      time: String(Date.toDate().toLocaleTimeString("en-US")),
      date: Date.toDate().toDateString(),
    });
    navigate("/singleBlog");
  };

  useEffect(() => {
    const getArticles = async () => {
      const getData = [];
      const Snapshot = await getDocs(collection(db, "AllBlogs"));

      Snapshot.forEach((doc) => {
        getData.push({
          ...doc.data(),
        });
      });
      setArticle(getData);
    };

    getArticles();

    return () => {
      // useEffect CleanUp function

      setArticle([]);
    };
  }, []);


  async function selectCategory(category) {
    const Data=[];
    const collectionRef = collection(db, "AllBlogs");
    const blogs = await getDocs(query(collectionRef ,where("category", "==", `${category}`)))
     blogs.forEach((doc)=>{
     Data.push({
        ...doc.data(),
      })
    })
    if(Data.length >0)
    {
      setArticle(Data);
    }
  }

  selectCategory();
  
  return (
    <div>
      <Navbar />
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search Something..."
          style={{ display: "flex", alignItems: "center" }}
        />
        <FcSearch className="searchIcon" />
      </div>

      <div className="allBlogsContainer">
        <div className="category">
          <div className="categoryTitle">Skills Categories</div>
          <div className="categoryShower">
             <Fade bottom>

            {Category.map((item, index) => (
              <div onClick={()=>setCategorySelected(true)}>
                <p key={index} onClick={()=>selectCategory(item)} className='Categories' >{item}</p>
              </div>
            ))}
            </Fade>
          </div>
        </div>
        <div className="allBlogs">
            
          {
            // noDataMessage ? 
            article.map((item, index) => (
            <Fade>
            <div className="allBlogWrapper" key={index}>
              <div className="allBlogImage">
                <img src={item.pic} alt="BlogImage" className="allblogImage" />
              </div>
              <div className="allBlogTextSection">
                {/* <p>{item.Date}</p> */}
                <p className="allBlogTitle">{item.title}</p>
                <div className="allBlogText">
                  <p style={{ lineHeight: "1.5rem" }}>{item.text}</p>
                </div>
                <button
                  className="allBlogButton"
                  onClick={() =>
                    ArticleHandler(item.title, item.text, item.pic, item.date)
                  }
                  >
                  READ MORE
                </button>
              </div>
            </div>
            </Fade>
          ))
          // :
          // <p>{noDataMessage}</p>
        }
        </div>
      </div>
    </div>
  );
};

export default Blogs;
