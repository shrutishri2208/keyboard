import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setString } from "../redux/string/stringActions";
import { specialCharacters } from "../letters";

const Button = ({ text, value, text2, value2 }) => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  const isCapital = useSelector((state) => state.isCapital.isCapital);

  return (
    <button
      className={`${
        text === "up" || text === "down" ? "lg:h-4 text-transparent" : "lg:h-12"
      } relative lg:w-12 md:w-10 sm:w-9 w-4 lg:h-12 md:h-10 sm:h-9 h-6 bg-copper sm:rounded-t-lg sm:rounded-b-3xl rounded-md font-semibold ${
        clicked === true ? "button-clicked" : ""
      }`}
      onClick={() => {
        if (isCapital === true) {
          if (specialCharacters.includes(text)) {
            dispatch(setString(value2));
          } else {
            dispatch(setString(value.toUpperCase()));
          }
        } else {
          dispatch(setString(value));
        }
        setClicked(true);
        setTimeout(() => {
          setClicked(false);
        }, 100);
      }}
    >
      <span className="absolute lg:top-0 md:top-0.5 sm:top-0.5 top-0 lg:left-2 md:left-2 sm:left-1.5 left-0.5 lg:text-base md:text-xs sm:text-xs text-xxs">
        {text}
      </span>
      <span className="absolute lg:bottom-1 md:bottom-1 sm:bottom-0.5 bottom-0.5 lg:right-3 md:right-2 lg:text-base md:text-xs sm:text-xs text-xxs">
        {text2 || ""}
      </span>
    </button>
  );
};

export default Button;
