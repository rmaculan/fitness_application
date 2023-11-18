import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedBmi = weight / height ** 2;
    setBmi(calculatedBmi.toFixed(2));

    if (calculatedBmi < 18.5) {
      setMessage(`Your BMI is ${calculatedBmi}, you are underweight`);
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
      setMessage(`Your BMI is ${calculatedBmi}, you are normal bodyweight`);
    } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
      setMessage(`Your BMI is ${calculatedBmi}, you are slightly overweight`);
    } else if (calculatedBmi >= 30 && calculatedBmi < 35) {
      setMessage(`Your BMI is ${calculatedBmi}, you are obese`);
    } else if (calculatedBmi >= 35) {
      setMessage(`Your BMI is ${calculatedBmi}, you are clinically obese`);
    } else {
      setMessage(`Your BMI is ${calculatedBmi}, You are severely underweight`);
    }
  };

  return (
    <>
    <Typography
        sx={{
            fontSize: { lg: "44px", xs: "24px" },
            color: "#3A1212",
            marginTop: "40px",
            marginBottom: "40px",
            marginLeft: "30px",
        }}
        fontWeight={700}
        
    >
        Let's Check Your Body Mass Index (BMI)
    </Typography>
    <Typography
        sx={{
            fontSize: { lg: "24px", xs: "18px" },
            color: "#3A1212",
            marginLeft: "40px",
            marginRight: "40px",
        }}
        fontWeight={700}       
    >
        Knowing your BMI is a good indicator of whether you are at a healthy weight.
        Use this calculator to check.
    </Typography>
    <Typography
        sx={{
            fontSize: { lg: "16px", xs: "18px" },
            color: "#3A1212",
            marginTop: "40px",
            marginLeft: "50px",
            marginRight: "50px",
        }}
        fontWeight={400}     
    >
        If you are overweight or obese, you have a higher risk of developing serious health problems,
        including heart disease, high blood pressure, type 2 diabetes, gallstones, breathing problems,
        and certain cancers. That is why maintaining a healthy weight is so important: It helps you lower
        your risk for developing these problems, helps you feel good about yourself, and gives you more
        energy to enjoy life.
    </Typography>
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
                marginTop: "20px",
                marginLeft: "40px",
                marginRight: "40px",
                marginBottom: "20px",
            }}
            fontWeight={400}    
        >
            Calculate your BMI
            using your weight in kilograms and height in meters.

            This calculates your overall body mass 
            in order to produce a
            figure which indicates if you are underweight, at a healthy weight,
            overweight or obese.
        </Typography>
        <Typography
          sx={{
            fontSize: { lg: "24px", xs: "18px" },
            color: "#3A1212",
          }}
          fontWeight={700}
          textTransform="capitalize"
        >
          Calculate your BMI
        </Typography>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
          onSubmit={handleSubmit}
        >
          <label>Weight</label>
          <input
            type="text"
            placeholder="Weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label>Height</label>
          <input
            type="text"
            placeholder="Height in meters"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
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
        {bmi && (
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
            >BMI: {bmi}</Typography>
            <p>{message}</p>
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default BMICalculator;
