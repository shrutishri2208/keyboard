import React from "react";
import { useDispatch } from "react-redux";
import { setColour } from "../redux/colour/colourActions";

const ColourButton = ({ colour, z }) => {
  const dispatch = useDispatch();

  return (
    <button
      className={`color-button z-100 key-${colour}`}
      onClick={() => dispatch(setColour(colour))}
    ></button>
  );
};

export default ColourButton;
