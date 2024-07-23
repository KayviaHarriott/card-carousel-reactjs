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
  width = 350,
  height = 150,
}) => {
  const [cardValue, setCardValue] = useState(0);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleButtonClick = (direction: "up" | "down") => {
    setCardValue((prev) =>
      direction === "up"
        ? Math.max(0, prev - 1)
        : Math.min(items.length - 1, prev + 1)
    );
  };

  const isDisabled = (direction: "up" | "down") =>
    (direction === "up" && cardValue === 0) ||
    (direction === "down" && cardValue === items.length - 1);

  const MUI_ButtonStyle = {
    width: "fit-content",
    padding: 0,
    minWidth: "fit-content",
  };

  const ArrowUpDownIcon =
    screenSize > 1024 ? KeyboardArrowUpIcon : KeyboardArrowLeftIcon;
  const ArrowDownUpIcon =
    screenSize > 1024 ? KeyboardArrowDownIcon : KeyboardArrowRightIcon;

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-[8px]">
      <Box
        className="p-[16px] rounded-lg flex"
        sx={{ boxShadow: "8px 8px 10px 2px rgba(0,0,0,0.2)" }}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-[24px]">
          <Box
            sx={{
              width: width,
              height: height,
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
          variant="text"
          sx={[
            MUI_ButtonStyle,
            { color: isDisabled("up") ? "lightgray" : "black" },
          ]}
          disabled={isDisabled("up")}
          onClick={() => handleButtonClick("up")}
        >
          <ArrowUpDownIcon />
        </Button>
        <Button
          variant="text"
          sx={[
            MUI_ButtonStyle,
            { color: isDisabled("down") ? "lightgray" : "black" },
          ]}
          disabled={isDisabled("down")}
          onClick={() => handleButtonClick("down")}
        >
          <ArrowDownUpIcon />
        </Button>
      </div>
    </div>
  );
};
