import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSpace,
  deleteString,
  setNewLine,
  setTab,
} from "../redux/string/stringActions";
import { setCapital } from "../redux/capital/capitalActions";
import keySound from "../assets/keySound.mp3";

const ExtraKeys = ({ name, lgH, mdH, smH, H, lgW, mdW, smW, W, text }) => {
  const dispatch = useDispatch();

  const [clicked, setClicked] = useState(false);

  const colour = useSelector((state) => state.colour.colour);
  const isCapital = useSelector((state) => state.isCapital.isCapital);

  const sound = useRef(null);
  const playSound = () => {
    if (sound.current) {
      sound.current.play();
    }
  };

  return (
    <button
      className={`key key-${colour} lg:h-${lgH} md:${mdH} sm:h-${smH} h-${H} lg:w-${lgW} md:w-${mdW} sm:w-${smW} w-${W} md:rounded-t-lg md:rounded-b-3xl sm:rounded-t-lg sm:rounded-2xl rounded-md font-semibold lg:text-base md:text-xs sm:text-xs text-xxs ${
        clicked === true ? "button-clicked" : ""
      }`}
      onClick={() => {
        if (name === "spaceBar") {
          dispatch(setSpace());
        } else if (name === "capslock") {
          dispatch(setCapital());
        } else if (name === "backSpace") {
          dispatch(deleteString());
        } else if (name === "enter") {
          dispatch(setNewLine());
        } else if (name === "tab") {
          dispatch(setTab());
        }
        setClicked(true);
        setTimeout(() => {
          setClicked(false);
        }, 100);
        playSound();
      }}
    >
      {name === "capslock" && (
        <p
          className={`absolute sm:-top-5 sm:right-1 sm:text-3xl -top-4 right-0.5  text-lg ${
            isCapital ? "text-white" : "text-black"
          }`}
        >
          .
        </p>
      )}
      {text}
      <audio ref={sound} src={keySound} preload="auto" />
    </button>
  );
};

export default ExtraKeys;
