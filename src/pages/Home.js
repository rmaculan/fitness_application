import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import BMICalculator from "../components/BMICalculator";
import DailyCalorieCalculator from "../components/DailyCalorieCalculator";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  console.log(bodyPart);

  return (
    <Box>
      <HeroBanner />
      
      <BMICalculator />
      <DailyCalorieCalculator />
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
