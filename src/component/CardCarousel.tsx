import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import CircleIcon from "@mui/icons-material/Circle";

interface CardCarouselProps {
  /** An array of React nodes to be displayed in the carousel. */
  items: React.ReactNode[];
  width?: number;
  height?: number;
}

export const CardCarousel: React.FC<CardCarouselProps> = ({
  items,
  width,
  height,
}) => {
  const [cardValue, setCardValue] = useState(0);
  const cardArrayLength = items.length;
  const [screenSize, setScreenSize] = useState(0); // = window.screen.availWidth

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDownButton = () => {
    if (cardValue < cardArrayLength - 1) {
      setCardValue(cardValue + 1);
    }
  };

  const handleUpButton = () => {
    if (cardValue != 0) {
      setCardValue(cardValue - 1);
    }
  };

  const MUI_ButtonStyle = {}; //{ padding: "0px", margin: "0px" };
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-[8px]">
      <Box
        className="p-[16px] rounded-lg flex"
        sx={{ boxShadow: "8px 8px 10px 2px rgba(0,0,0,0.2)" }}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-[24px]">
          <Box
            sx={{
              width: width ? width : "350px",
              height: height ? height : "150px",
            }}
            className="py-[4px] pl-[4px] pr-[24px] overflow-x-auto"
          >
            {items.map((item, index) => (
              <div key={index} hidden={index == cardValue ? false : true}>
                {item}
              </div>
            ))}
          </Box>
          <div className="flex flex-row lg:flex-col gap-[4px]">
            {items.map((_item, index) => (
              <CircleIcon
                key={index}
                sx={{
                  width: "8px",
                  m: 0,
                  p: 0,
                  height: "auto",
                  color: cardValue == index ? "black" : "lightgray",
                }}
              />
            ))}
          </div>
        </div>
      </Box>
      <div className="flex flex-row lg:flex-col">
        <Button
          sx={[
            MUI_ButtonStyle,
            {
              color: cardValue == 0 ? "lightgray" : "black",
              cursor: cardValue == 0 ? "default" : "pointer",
              width: "0px",
            },
          ]}
          variant="text"
          disabled={cardValue == 0 ? true : false}
          onClick={() => handleUpButton()}
        >
          <Box hidden={screenSize > 1024 ? false : true}>
            <KeyboardArrowUpIcon />
          </Box>
          <Box hidden={screenSize > 1024 ? true : false}>
            <KeyboardArrowLeftIcon />
          </Box>
        </Button>
        <Button
          sx={[
            MUI_ButtonStyle,
            {
              color: cardValue == cardArrayLength - 1 ? "lightgray" : "black",
            },
          ]}
          variant="text"
          disabled={cardValue == cardArrayLength - 1 ? true : false}
          onClick={() => handleDownButton()}
        >
          <Box hidden={screenSize > 1024 ? false : true}>
            <KeyboardArrowDownIcon />
          </Box>
          <Box hidden={screenSize > 1024 ? true : false}>
            <KeyboardArrowRightIcon />
          </Box>
        </Button>
      </div>
    </div>
  );
};
