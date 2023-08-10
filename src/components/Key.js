import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setString,
  deleteString,
  setSpace,
  setNewLine,
  setTab,
  clearAll,
} from "../redux/string/stringActions";
import { setCapital } from "../redux/capital/capitalActions";
import keySound from "../assets/keySound.mp3";

const Key = ({ text, value, text2, value2, type }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const dispatch = useDispatch();
  const fullString = useSelector((state) => state.fullString.fullString);
  const isCapital = useSelector((state) => state.isCapital.isCapital);

  const sound = useRef(null);

  const playSound = () => {
    if (sound.current) {
      sound.current.play();
    }
  };

  return (
    <button
      className={`key flex justify-between items-center base-frame ${
        isPressed === true ? "key-pressed" : ""
      }`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onMouseOver={() => setIsHover(true)}
      onClick={() => {
        playSound();
        setIsPressed(true);
        setTimeout(() => {
          setIsPressed(false);
        }, 200);
        switch (text) {
          case "caps": {
            dispatch(setCapital(true));
            break;
          }
          case "back": {
            dispatch(deleteString());
            break;
          }
          case "space": {
            dispatch(setSpace());
            break;
          }
          case "shift": {
            console.log("SHIFT");
            break;
          }
          case "enter": {
            dispatch(setNewLine());
            break;
          }
          case "tab": {
            dispatch(setTab());
            break;
          }
          case "clear": {
            dispatch(clearAll());
            break;
          }
          default: {
            if (isCapital === true) {
              if (value2) {
                dispatch(setString(value2));
              } else {
                dispatch(setString(value.toUpperCase()));
              }
            } else {
              dispatch(setString(value));
            }
          }
        }
      }}
    >
      <div
        className={`${
          text === "space" ? " outer-circle-kb" : "outer-circle"
        } relative`}
      >
        <div
          className={`${
            text === "space" ? "white-ring-border-kb" : "white-ring-border"
          }`}
        ></div>
        <div
          className={`${
            text === "space" ? "inner-circle-kb" : "inner-circle"
          } ${
            isHover === true ? "inner-circle-hover inner-circle-kb-hover" : ""
          }`}
        >
          <div
            className={`relative flex flex-col justify-center items-center ${
              type === "single"
                ? "single-text "
                : type === "extra" && text === "space"
                ? "opacity-0"
                : type === "extra" && text === "caps"
                ? "caps-text "
                : type === "extra"
                ? "extra-text "
                : "dual-text"
            }`}
          >
            <p
              className={`relative top-1 ${
                isCapital === true
                  ? "opacity-100 scale-150 2xl:top-3.5 xl:top-3.5 lg:top-3.5 top-2.5"
                  : "opacity-50 scale-100"
              }`}
            >
              {text2}
            </p>
            {text === "caps" && (
              <div
                className={`font-3xl h-1 w-1 rounded-full mb-0.5 bg-white ${
                  isCapital === true ? "opacity-100" : "bg-white opacity-20"
                }`}
              ></div>
            )}
            <p
              className={`${
                isCapital === true && type === "dual" ? "hidden" : "opacity-100"
              }`}
            >
              {text}
            </p>
          </div>
        </div>
      </div>
      <audio src={keySound} ref={sound} preload="auto"></audio>
    </button>
  );
};

export default Key;
