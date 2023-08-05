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
          className={`${text === "space" ? "inner-circle-kb" : "inner-circle"}`}
        >
          <p
            className={`relative ${
              type === "single"
                ? "single-text "
                : type === "extra" && text === "space"
                ? "opacity-0"
                : type === "extra"
                ? "extra-text "
                : "dual-text"
            }`}
          >
            <p className="text-md">{text2}</p>
            {text}
          </p>
        </div>
      </div>
      <audio src={keySound} ref={sound} preload="auto"></audio>
    </button>
  );
};

export default Key;
