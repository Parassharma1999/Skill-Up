import React, { useState, useEffect } from "react";
import "./LiveSession.css";
import { getDocs, doc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { Box, Typography, Button } from "@mui/material";
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
      <Box
        style={{
          marginTop:"4rem",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          marginBottom: "2rem",
          paddingX: "10%",
        }}
      >
        {links.map((item, index) => (
          <Box key={index} height={"20%"} margin={"1rem"}>
            <Box
              display={"flex"}
              className="wrapper"
              padding={"1rem"}
              height={"auto"}
              flexDirection={"column"}
              justifyContent={"center"}
              margin={"auto auto"}
            >
              <Box>
                <Typography variant="h4">{item.courseName}</Typography>
              </Box>

              <Box display={"flex"} justifyContent="space-evenly">
                <Typography
                  style={{
                    backgroundColor: "purple",
                    color: "lavender",
                    padding: "0.3rem 0.5rem",
                    borderRadius: "20px",
                    textAlign: "center",
                    display: "inline-block",
                  }}
                >
                  {item.category}
                </Typography>

                <Typography
                  style={{
                    backgroundColor: "purple",
                    color: "lavender",
                    padding: "0.3rem 0.5rem",
                    borderRadius: "20px",
                    textAlign: "center",
                    display: "inline-block",
                  }}
                >
                  Duration: {item.duration}
                </Typography>
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent="space-evenly"
              >
                <Typography textAlign={"justify"} margin="0.5rem">
                  <b>Description:</b> {item.description}
                </Typography>
                <Box display="flex">
                  <Typography margin="0.5rem">
                    <b>Session Link:</b>{" "}
                    <a
                      href={item.link}
                      target="blank"
                      style={{ textDecorationLine: "none", color: "blue" }}
                    >
                      {item.link}
                    </a>
                  </Typography>
                  <IoIosCopy
                    size="25"
                    style={{ cursor: "pointer" }}
                    className="icon"
                   
                  />
                </Box>
                {/* <Button variant={"contained"} 
            // onClick={()=>ArticleHandler(index,item.Title,item.article)}
            sx={{width:"50%",marginX:"auto",position:"static"}}>Copy Link</Button> */}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default LiveSession;
