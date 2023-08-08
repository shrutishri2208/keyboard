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

const Key2 = ({ text, value, text2, value2, type }) => {
  const [isPressed, setIsPressed] = useState(false);

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
      className={`key2 flex justify-between items-center base-frame ${
        isCapital === true && text === "caps" ? "bg-green bg-opacity-60" : ""
      } ${isPressed === true ? "key2-pressed" : ""}`}
      onClick={() => {
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
      <div className="outer-shadow">
        <div
          className={` ${
            text === "space" ? " inner-box-kb" : "inner-box"
          } flex items-center justify-around
          `}
        >
          <div
            className={`relative ${text === "space" ? " hidden" : ""}  ${
              isCapital === true && type === "dual"
                ? "opacity-20"
                : "opacity-100"
            } ${
              type === "single"
                ? "single-text2 "
                : type === "extra"
                ? "extra-text2"
                : "dual-text2"
            } duration-500`}
          >
            <p className="absolute p-shadow">{text}</p>
            <p className="uppercase">{text}</p>
          </div>
          {text2 && (
            <div
              className={`relative ${text === "space" ? " hidden" : ""} ${
                isCapital === true && type === "dual"
                  ? "opacity-100"
                  : "opacity-20"
              } duration-500`}
            >
              <p className="absolute p-shadow">{text}</p>
              <p clas>{text2}</p>
            </div>
          )}
        </div>
      </div>
      {/* <div
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
          className={`${text === "space" ? "inner-circle-kb" : "inner-circle"}`}
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
      </div> */}
      <audio src={keySound} ref={sound} preload="auto"></audio>
    </button>
  );
};

export default Key2;
