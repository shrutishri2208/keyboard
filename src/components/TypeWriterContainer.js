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
    <div className=" flex flex-col 2xl:gap-8 xl:gap-8 lg:gap-8 md:gap-2">
      <div className="textarea flex justify-center rounded-lg 2xl:text-xl xl:text-xl lg:text-xl md:text-md overflow-hidden">
        <input
          ref={textinput}
          type="text"
          onInput={scrollText()}
          className="bg-transparent absolute right-3 top-0 w-auto border-none outline-none text-right 2xl:pt-5 xl:pt-5 lg:pt-5 md:pt-1.5"
          value={fullString}
        />
        <div className="textarea-gradient rounded-lg h-full w-full absolute left-0 top-0"></div>
      </div>
      <div className="typeWriterContainer flex flex-col 2xl:gap-2 xl:gap-2 lg:gap-2 items-center rounded-3xl">
        <Row items={numbers} row={1} />
        <Row items={letters1} row={2} />
        <Row items={letters2} row={3} />
        <Row items={letters3} row={4} />
        <div className="mt-2 flex gap-4">
          <Key text={"space"} type={"extra"} />
          {/* <Key text={"clear"} type={"extra"} /> */}
        </div>
      </div>
    </div>
  );
};

export default TypeWriterContainer;
