import React, { useRef, useEffect, useState } from "react";
import Row from "./Row";
import { letters1, letters2, letters3, numbers, colours } from "../letters";

import { useSelector, useDispatch } from "react-redux";
import {
  setString,
  deleteString,
  setNewLine,
} from "../redux/string/stringActions";
import { setCapital } from "../redux/capital/capitalActions";
import Row5 from "./Row5";
import ColourButton from "./ColourButton";
import soundOn from "../assets/soundOn.png";
import soundOff from "../assets/soundOff.png";

const Container = () => {
  const fullString = useSelector((state) => state.fullString.fullString);
  const colour = useSelector((state) => state.colour.colour);

  const [colourOptions, setColourOptions] = useState(false);

  const textArea = useRef();

  const setHeight = () => {
    let scrollHeight = 0;
    if (textArea.current) {
      textArea.current.style.height = "auto";
      scrollHeight = textArea.current.scrollHeight;
      if (scrollHeight > textArea.current.clientHeight) {
        textArea.current.style.height = scrollHeight + 10 + "px";
      }
    }
  };

  // useEffect(() => {
  //   const handleKeyPress = (e) => {
  //     if (e.key === "Enter") {
  //       console.log("ENTER");
  //       dispatch(setNewLine());
  //     } else {
  //       dispatch(setString(e.key));
  //     }
  //     e.stopPropagation();
  //   };

  //   const handleKeyDown = (e) => {
  //     if (e.key === "CapsLock") {
  //       dispatch(setCapital());
  //     }
  //     if (e.key === "Backspace") {
  //       dispatch(deleteString());
  //     }
  //     if (e.key === "Enter") {
  //       dispatch(setNewLine());
  //     }

  //     e.stopPropagation();
  //   };

  //   window.addEventListener("keypress", handleKeyPress, { once: true });
  //   window.addEventListener("keydown", handleKeyDown, { once: true });
  //   return () => {
  //     window.removeEventListener("keypress", handleKeyPress);
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // });

  return (
    <div className=" h-screen">
      <div className="w-fit m-auto py-8 ">
        <div className="">
          <div className="gap-2 flex justify-end my-4 w-full relative">
            <img
              src={soundOn}
              className="h-9 w-9 absolute left-0 -bottom-1 border-2 p-1 rounded-full"
            ></img>
            {colours.map((item, index) => {
              return (
                <ColourButton
                  {...item}
                  key={index}
                  colourOptions={colourOptions}
                  setColourOptions={setColourOptions}
                />
              );
            })}
            <button
              className={`absolute -bottom-1 -right-1 w-10 h-10 border-4 rounded-full key-${colour} `}
              onClick={() => {
                setColourOptions(!colourOptions);
              }}
            ></button>
          </div>
          <textarea
            readOnly
            onChange={setHeight()}
            ref={textArea}
            value={fullString}
            className={`w-full border-4 border-light${colour} bg-transparent rounded-xl resize-none font-semibold text-lg py-2 px-4 overflow-hidden text-white`}
          ></textarea>
        </div>
        <Row items={numbers} row={"1"} />
        <Row items={letters1} row={"2"} />
        <Row items={letters2} row={"3"} />
        <Row items={letters3} row={"4"} />
        <Row5 />
      </div>
      {/* <button></button> */}
    </div>
  );
};

export default Container;
