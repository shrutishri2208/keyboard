import React from "react";
import { useDispatch } from "react-redux";
import { setColour } from "../redux/colour/colourActions";

const ColourButton = ({ colour, right, colourOptions, setColourOptions }) => {
  const dispatch = useDispatch();
  const rightClass = "right-" + right;

  return (
    <button
      className={`absolute bottom-0 ${
        colourOptions === true ? rightClass : "right-0"
      }  w-8 h-8 border-4 rounded-full transition-all duration-200 key-${colour} `}
      onClick={() => {
        dispatch(setColour(colour));
        setColourOptions(!colourOptions);
      }}
    ></button>
  );
};
export default ColourButton;
