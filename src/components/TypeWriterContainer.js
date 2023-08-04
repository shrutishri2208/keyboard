import React, { useRef, useEffect } from "react";
import Row from "./Row";
import Key from "./Key";
import { numbers, letters1, letters2, letters3 } from "../letters";
import { useSelector } from "react-redux";

const TypeWriterContainer = () => {
  const fullString = useSelector((state) => state.fullString.fullString);

  const textinput = useRef();

  const scrollText = () => {
    if (textinput.current) {
      let textLength = textinput.current.value.length || 0;
      let textWidth = textinput.current.clientWidth + textLength;
      textinput.current.style.width = textWidth + "px";
    }
  };

  return (
    <div className="mt-16 flex flex-col gap-8">
      <div className="textarea flex justify-center rounded-lg 2xl:text-xl xl:text-xl lg:text-xl md:text-lg px-4 overflow-hidden">
        <input
          ref={textinput}
          type="text"
          onInput={scrollText()}
          className="bg-transparent absolute right-3 top-0 w-auto border-none outline-none text-right pt-3 "
          value={fullString}
        />
        <div className="textarea-gradient rounded-lg h-full w-full absolute left-0 top-0"></div>
      </div>
      <div className="typeWriterContainer flex flex-col gap-2 items-center p-12 rounded-3xl">
        <Row items={numbers} row={1} />
        <Row items={letters1} row={2} />
        <Row items={letters2} row={3} />
        <Row items={letters3} row={4} />
        {/* <br /> */}
        <div className="mt-2 flex gap-2">
          <Key text={"space"} type={"extra"} />
        </div>
      </div>
    </div>
  );
};

export default TypeWriterContainer;
