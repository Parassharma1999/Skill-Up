import React, { useState, useEffect } from "react";
import "./LiveSession.css";
import { getDocs, doc, collection,query,where } from "firebase/firestore";
import { auth, db } from "../../firebase";
import {Avatar} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { IoIosCopy } from "react-icons/io";
import Empty from "../SVG/emptyBlog.svg"
import Fade from "react-reveal/Fade";

const LiveSession = () => {
  const [links, setLinks] = useState([]);
  const [categorySelect,setCategorySelected] = useState(false);

  const Info = [];
  const Category = ["Cooking", "Computer science","Music","Dance"];

  useEffect(() => {
    const getData = async () => {
      const SnapShot = await getDocs(collection(db, "totalSession"));
      SnapShot.forEach((doc) => {
        Info.push({
          ...doc.data(),
        });
      });

      setLinks(Info);
    };

    getData();
    return () => {
      getData();
    };
  }, []);

  async function selectCategory(category) {
    const Data=[];
    const collectionRef = collection(db, "totalSession");
    const blogs = await getDocs(query(collectionRef ,where("Category", "==", `${category}`)))
     blogs.forEach((doc)=>{
     Data.push({
        ...doc.data(),
      })
    })
    if(Data.length >0)
    {
      setLinks(Data);
    }
  }

  selectCategory();

  return (
    <>
      <Navbar />
      <div className="allSessionsContainer">
      <div className="skillCategory">
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
      <div className="sessionContainer">
       {links.length >0 ? links.map((item, index) => (
          <div
            key={index}
            height={"20%"}
            margin={"1rem"}
            className="sessionWrapper"
          >
            <div className="wrapper">
              <div className="sessionHeading">
                <p className="sessionCourseName">{item.CourseName}</p>
              </div>

              <div className="sessionMiddle">
                <p className="sessionCategory">{item.Category}</p>

                <p className="sessionDuration">
                {item.SessionDuration}
                </p>
              </div>

              <div className="timeSession">
                <div className="timeSessionWrapper">
                  <div className="sessionDate">
                    <b>Date:</b> {item.SessionDate}
                  </div>

                  <div className="sessionStartTime">
                    <b>Starts At:</b> {item.StartTime}
                  </div>
                </div>

                <div className="sessionDescription">
                  <b>Description:</b> {item.Description}
                </div>
                <div className="sessionLink">
                  <p margin="0.5rem">
                    <b>Session Link:</b>{" "}
                    <a
                      href={item.link}
                      target="blank"
                      style={{ textDecorationLine: "none", color: "blue" }}
                    >
                      {item.Link}
                    </a>
                  </p>
                  <IoIosCopy
                    size="25"
                    style={{ cursor: "pointer" }}
                    className="icon"
                  />
                </div>
                <div className="sessionBottom">
                  {/* <p textAlign={"justify"} margin="0.5rem">
                   {item.releasedDate}
                </p> */}
                   <div>
                  {/* <img src={item.volunteerImage} alt="volunteer Pic" className="volunteerPic" /> */}
                  <Avatar
                      src={item.volunteerImage}
                     sx={{ width: 50, height: 50, fontSize: "6rem" }}
          />

                   </div>
                  <div>
                    <p textAlign={"justify"} margin="0.5rem">
                      {item.volunteerEmail}
                    </p>
                    <p textAlign={"justify"} margin="0.5rem">
                      {item.volunteerName}
                    </p>
                  </div>
                </div>
                {/* <Button variant={"contained"} 
            // onClick={()=>ArticleHandler(index,item.Title,item.article)}
            sx={{width:"50%",marginX:"auto",position:"static"}}>Copy Link</Button> */}
              </div>
            </div>
          </div>
        )):
        <div className='emptyPersonalSession'>
      <img src={Empty} alt="Empty" height={"200px"} width="200px" />
       <p  className="emptyMessage">No Sessions available !</p>
        </div>
        
        }
      </div>
      </div>
    </>
  );
};

export default LiveSession;
