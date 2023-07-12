import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLetter } from "../redux/letter/letterActions";
import { setString } from "../redux/string/stringActions";

const Button = ({ text, value }) => {
  const dispatch = useDispatch();

  const selLetter = useSelector((state) => state.selLetter.selLetter);

  return (
    <div>
      <button
        className={`${
          text === "~" ? "w-8" : text === "u" ? "w-16" : "w-12"
        } h-12 bg-copper rounded-t-lg rounded-b-3xl font-semibold`}
        onClick={() => dispatch(setString(value))}
      >
        {text}
      </button>
      {/* <p>{letter}</p> */}
    </div>
  );
};

export default Button;
