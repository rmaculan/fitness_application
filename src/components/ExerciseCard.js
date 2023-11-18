import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      className="exercise-card"
      to={`/exercise/${exercise.id}`}
      style={{
        boxShadow: "0px 2px 32px rgba(0, 0, 0, 0.25)",
        padding: "20px",
        opacity: "0.9",
        borderRadius: "6px",
      }}
    >
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        sx={{
          fontSize: { lg: "16px", xs: "18px" },
        }}
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "tomato",
            fontSize: "14px",
            borderRadius: "6px",
            textTransform: "capitalize",
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.25)",
          }}
        >
          Muscle: {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "orange",
            fontSize: "14px",
            borderRadius: "6px",
            textTransform: "capitalize",
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.25)",
          }}
        >
          Target: {exercise.target}
        </Button>
      </Stack>
      
    </Link>
  );
};

export default ExerciseCard;
