import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          height: "10rem",
          borderBottom: "3px solid black",
          bgcolor: "lightblue",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems:"center",    
        }}
      > 
      </Box>
    </>
  );
};

export default Navbar;
