import React from "react";
import { useDispatch } from "react-redux";
import { setColour } from "../redux/colour/colourActions";

const ColourButton = ({ colour, z, colourOptions, setColourOptions }) => {
  const dispatch = useDispatch();
  console.log("Z IS: ", z);

  return (
    <button
      className={`absolute bottom-0 ${
        colourOptions === true ? `right-[${z}rem]` : "right-0"
      } color-button key-${colour} `}
      onClick={() => {
        dispatch(setColour(colour));
        setColourOptions(!colourOptions);
      }}
    ></button>
  );
};
export default ColourButton;
