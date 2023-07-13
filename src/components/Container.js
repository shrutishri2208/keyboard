import React, { useRef, useEffect } from "react";
import Row from "./Row";
import { letters1, letters2, letters3, numbers, colours } from "../letters";

import { useSelector, useDispatch } from "react-redux";
import { setString } from "../redux/string/stringActions";
import { setCapital } from "../redux/capital/capitalActions";
import Row5 from "./Row5";
import ColourButton from "./ColourButton";

const Container = () => {
  const fullString = useSelector((state) => state.fullString.fullString);
  const colour = useSelector((state) => state.colour.colour);

  const dispatch = useDispatch();

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

  useEffect(() => {
    const handleKeyPress = (e) => {
      dispatch(setString(e.key));
      if (e.key === "CapsLock") {
        console.log("CAPS LOCK");
        dispatch(setCapital());
      }
      e.stopPropagation();
    };

    window.addEventListener("keypress", handleKeyPress, { once: true });

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  });

  return (
    <div className=" h-screen">
      <div className="w-fit m-auto py-8 ">
        <textarea
          readOnly
          onChange={setHeight()}
          ref={textArea}
          value={fullString}
          id="text-area"
          className={`w-full border-4 border-light${colour} bg-transparent rounded-xl resize-none text-${colour} font-semibold text-lg p-2 overflow-hidden`}
        ></textarea>
        <Row items={numbers} row={"1"} />
        <Row items={letters1} row={"2"} />
        <Row items={letters2} row={"3"} />
        <Row items={letters3} row={"4"} />
        <Row5 />
      </div>
      <div className="fixed bottom-8 right-8 gap-2 flex ">
        {colours.map((item, index) => {
          return <ColourButton {...item} key={index} />;
        })}
      </div>
      {/* <button></button> */}
    </div>
  );
};

export default Container;
