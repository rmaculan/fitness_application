import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <>
    <Box 
    mt="80px" 
    style={{
      backgroundImage: "linear-gradient(to left, #FFF, #FF9800)",
      boxShadow: "0px 2px 32px rgba(0, 0, 0, 0.25)",
      padding: "20px",
      opacity: "9.9",
    }}
   >
      <Stack
        gap="40px"
        sx={{ alignItems: "center" }}
        flexWrap="wrap"
        px="40px"
        pt="24px"
      >
        <Typography>
          Powered by <a href="https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb">RapidApi</a>
        </Typography>
        <Typography>
          through
        </Typography>
        <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
      </Stack>
      <Typography
        sx={{
          fontSize: { lg: "24px", xs: "18px" },
          color: "#3A1212",
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
       Design and feature upgrades by Robert Maculan &copy; 2023
      </Typography>
    </Box>

  </>
);

export default Footer;
