import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";

const DailyCalorieCalculator = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [dailyCalories, setDailyCalories] = useState(null);
  const [BMR, setBMR] = useState(null); // New state variable for BMR

  function calculateBMR(inputWeight, inputHeight, inputAge, inputGender) {
    let calculatedBMR;
    const heightInCm = inputHeight * 100; // Convert height from meters to centimeters

    if (inputGender === "male") {
      calculatedBMR =
        66.5 + 13.75 * inputWeight + 5.003 * heightInCm - 6.75 * inputAge;
    } else if (inputGender === "female") {
      calculatedBMR =
        655.1 + 9.563 * inputWeight + 1.85 * heightInCm - 4.676 * inputAge;
    }
    return calculatedBMR;
  }

  function calculateDailyCalories(BMR, inputActivityLevel) {
    let calories;
    if (inputActivityLevel === "sedentary") {
      calories = BMR * 1.2;
    } else if (inputActivityLevel === "lightly active") {
      calories = BMR * 1.375;
    } else if (inputActivityLevel === "moderately active") {
      calories = BMR * 1.55;
    } else if (inputActivityLevel === "very active") {
      calories = BMR * 1.725;
    } else if (inputActivityLevel === "super active") {
      calories = BMR * 1.9;
    }
    return calories;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const calculatedBMR = calculateBMR(weight, height, age, gender);
    setBMR(calculatedBMR); // Set the calculated BMR to state
    const calories = calculateDailyCalories(calculatedBMR, activityLevel);
    setDailyCalories(calories);
  };

  return (
    <>
      <Typography
        justifyContent="center"
        sx={{
          fontSize: { lg: "44px", xs: "24px" },
          color: "#3A1212",
          marginTop: "80px",
          marginLeft: "50px",
          marginRight: "50px",
        }}
        fontWeight={700}
      >
        Now Let's Calculate Your Total Daily Energy
            Expenditure (TDEE).
      </Typography>
      <Typography
        justifyContent="center"
        sx={{
          fontSize: { lg: "24px", xs: "18px" },
          color: "#3A1212",
          marginTop: "40px",
          marginLeft: "60px",
          marginRight: "50px",
        }}
        fontWeight={700}
      >
        This tool will help you figure out how many calories you need to eat
        daily based on your activity level.
      </Typography>
      <Stack
        direction="column"
        justifyContent="center"
        gap="20px"
        p="20px"
        mt="40px"
        ml={{ lg: "40px", xs: "20px" }}
        mr={{ lg: "40px", xs: "20px" }}
        style={{
          backgroundImage: "linear-gradient(to bottom, #FFF, #FF9800)",
          boxShadow: "0px 2px 32px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
          padding: "20px",
          opacity: "0.9",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
          onSubmit={handleSubmit}
        >
          <Typography
            sx={{
              fontSize: { lg: "24px", xs: "18px" },
              color: "#3A1212",
              marginTop: "20px",
              marginLeft: "40px",
              marginRight: "40px",
              marginBottom: "20px",
            }}
            fontWeight={400}
          >
            Fill in the following fields to calculate your TDEE. That means, how many calories you need to eat
            daily to maintain your current weight. If you want to lose weight,
            you should eat less than this amount.
          </Typography>
          <label>Age:</label>
          <input
            type="number"
            placeholder="Age in years"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <label>Weight (in kg):</label>
          <input
            type="number"
            placeholder="Weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label>Height (in meters):</label>
          <input
            type="number"
            placeholder="Height in meters"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label>Activity Level:</label>
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="sedentary">Sedentary: No Exercise</option>
            <option value="lightly active">Lightly Active: 1 - 2 times a week</option>
            <option value="moderately active">Moderately Active: 3 - 4 times a week</option>
            <option value="very active">Very Active: 4 - 5 times a week</option>
            <option value="super active">Super Active or Physical Job: 6 - 7 times a week</option>
          </select>
          <button
            style={{
              background: "#FFF2DB",
              borderRadius: "10%",
              width: "100px",
              height: "100px",
            }}
            type="submit"
          >
            Calculate
          </button>
        </form>
        {BMR && dailyCalories && (
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="20px"
            p="20px"
            mt="40px"
            ml={{ lg: "40px", xs: "20px" }}
            mr={{ lg: "40px", xs: "20px" }}
            style={{
              backgroundImage: "linear-gradient(to bottom, #FFF, #FF9800)",
              boxShadow: "0px 2px 32px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              padding: "20px",
              opacity: "0.9",
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "24px", xs: "18px" },
                color: "#3A1212",
                
              }}
              fontWeight={700}
              textTransform="capitalize"
            >
              Your TDEE is {dailyCalories} calories a day.
            </Typography>
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default DailyCalorieCalculator;
