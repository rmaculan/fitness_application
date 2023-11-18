import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
//import Logo from '../assets/icons/target.png';

const Navbar = () => {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        gap="40px"
        fontSize="32"
        alignItems="flex-end"
        style={{ 
          backgroundImage: "linear-gradient(to right, #FFF, #FF9800)",
          boxShadow: "0px 2px 32px rgba(0, 0, 0, 0.25)",
          padding: "20px",
          opacity: "0.9",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            
          }}
        >
          Home
        </Link>
        {/* <Link
          to="/BMICalculator"
          style={{
            textDecoration: "none",
            color: "#3A1212",
           
          }}>
          BMI Calculator
          </Link> */}
        
      </Stack>
    </>
  );
};

export default Navbar;
