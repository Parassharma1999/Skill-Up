import React, { useState, useEffect } from "react";
import "./LiveSession.css";
import { getDocs, doc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { Box, p, Button } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { IoIosCopy } from "react-icons/io";

const LiveSession = () => {
  const [links, setLinks] = useState([]);

  const Info = [];

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

  return (
    <>
      <Navbar />
      <div className="sessionContainer">
        {links.map((item, index) => (
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
                  Duration: {item.SessionDuration}
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
                  <img src={item.volunteerImage} alt="volunteer Pic" className="volunteerPic" />

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
        ))}
      </div>
    </>
  );
};

export default LiveSession;
