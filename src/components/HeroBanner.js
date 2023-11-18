import React from "react";
import { Box, Typography, Button } from "@mui/material";
//import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: {
          lg: "102px",
          xs: "70px",
        },
        ml: {
          lg: "50px",
          md: "20px",
          sm: "20px",
          xs: "20px",
        },
        mr: {
          lg: "50px",
          md: "20px",
          sm: "20px",
          xs: "20px",
        }
      }}
      position="relative"
      p="20px"
      style={{ 
        boxShadow: "0px 2px 32px rgba(0, 0, 0, 0.25)",
        padding: "20px",
        opacity: "0.9",
        borderRadius: "10px",
      }}
    >
      <Typography color="#FF2625">Club Swole</Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { xs: "40px", sm: "60px", md: "60px", lg: "80px" } }}
      >
        Learn, Train <hr /> Educate!
      </Typography>
      <Typography
        fontWeight={400}
        fontSize={{ xs: "20px", sm: "20px", md: "20px", lg: "30px" }}
        lineHeight="35px"
        mb={4}
      >
        Check out our latest workouts
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
          backgroundColor: "#FF2625",
          color: "#fff",
          borderRadius: "6px",
        }}
      >
        Get Started
      </Button>
      {/* <Typography
        fontWeight={400}
        color="tomato"
        sx={{
          fontSize: {
            opacity: 50.1,
            display: {
              lg: "block",
              sm: "none",
              xs: "none",
            },
          },
          fontSize: "90px",
        }}
      >
        Let's Begin!
      </Typography> */}
    
      {/* <img src={HeroBannerImage} alt='banner'
      className="hero-banner-img" 
      /> */}
    </Box>
  );
};

export default HeroBanner;
