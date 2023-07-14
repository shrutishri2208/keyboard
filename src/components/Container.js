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

const Container = () => {
  const fullString = useSelector((state) => state.fullString.fullString);
  const colour = useSelector((state) => state.colour.colour);

  const dispatch = useDispatch();

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
          <div className="gap-2 flex justify-end my-2 w-full relative">
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
              className={`absolute bottom-0 right-0 color-button key-${colour} `}
              onClick={() => {
                console.log("CLICKED");
                setColourOptions(!colourOptions);
              }}
            ></button>

            {/* <ColourButton
              // colour={"blue"}
              onClick={() => {
                console.log("CLICKED");
                setColourOptions(!colourOptions);
              }}
            /> */}
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
