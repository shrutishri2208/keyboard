import React from "react";
import { useDispatch } from "react-redux";
import { setColour } from "../redux/colour/colourActions";

const ColourButton = ({ colour, right, colourOptions, setColourOptions }) => {
  const dispatch = useDispatch();
  console.log(`right-${right}`);

  return (
    <button
      className={`absolute bottom-0 ${
        colourOptions === true ? `right-${right}` : "right-0"
      } color-button key-${colour} `}
      onClick={() => {
        dispatch(setColour(colour));
        setColourOptions(!colourOptions);
      }}
    ></button>
  );
};
export default ColourButton;
