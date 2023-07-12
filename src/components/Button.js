import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setString } from "../redux/string/stringActions";
import { specialCharacters } from "../letters";

const Button = ({ text, value, text2, value2 }) => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  const isCapital = useSelector((state) => state.isCapital.isCapital);

  return (
    <div>
      <button
        className={`relative ${
          text === "~" ? "w-8" : text === "u" ? "w-16" : "w-12"
        } h-12 bg-copper rounded-t-lg rounded-b-3xl font-semibold ${
          clicked === true ? "button-clicked" : ""
        }`}
        onClick={() => {
          if (isCapital === true) {
            if (text in specialCharacters) {
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
        <span className="absolute top-0 left-2"> {text}</span>
        <span className="absolute bottom-1 right-3"> {text2 || ""}</span>
      </button>
      {/* <p>{letter}</p> */}
    </div>
  );
};

export default Button;
