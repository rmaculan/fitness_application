import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import BMICalculator from "../components/BMICalculator";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  console.log(bodyPart)

  return (
    <Box>
      <HeroBanner />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        gap="40px"
        fontSize="32"
        alignItems="flex-end"
        borderRadius="20px"
        style={{ 
          backgroundImage: "linear-gradient(to right, #FFF, #FF9800)",
          boxShadow: "0px 2px 32px rgba(0, 0, 0, 0.25)",
          padding: "20px",
          opacity: "0.9",
          marginTop: "40px",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        <Typography
        sx={{
          fontSize: { lg: "64px", xs: "30px" },
          color: "#3A1212",
          marginTop: "40px",
          marginBottom: "40px",
          marginLeft: "30px",
        }}
        fontWeight={700}
      >
        Exercise Search Engine With BMI Calculator
      </Typography>
      </Stack>
      <BMICalculator />
      <Typography
        justifyContent="center"
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
          color: "#3A1212",
          marginTop: "80px",
          marginLeft: "50px",
          marginRight: "50px",

        }}
        fontWeight={700}
      >
        Search Exercises to Target Specific Body Parts 
        and Muscles to achieve your target BMI.
    
      </Typography>
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
        
      />
      
    </Box>
  );
};

export default Home;
