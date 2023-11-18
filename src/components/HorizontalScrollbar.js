import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import ExerciseCard from './ExerciseCard';
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
  return (
    <>
    
      <ScrollMenu 
      LeftArrow={LeftArrow} 
      RightArrow={RightArrow}
      >
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
            mt='20px'
            mb='20px'
            style={{ 
              boxShadow: "0px 2px 32px rgba(0, 0, 0, 0.25)",
              padding: "20px",
              opacity: "0.9",
              borderRadius: "6px",
            }}
          >
            {bodyPart ? <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
            : <ExerciseCard exercise={item} />}
          </Box>
        ))}
      </ScrollMenu>
    </>
  );
};

export default HorizontalScrollbar;
