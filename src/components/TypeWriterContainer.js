import React, { useRef } from "react";
import Row from "./Row";
import Key from "./Key";
import { numbers, letters1, letters2, letters3 } from "../letters";
import { useSelector } from "react-redux";
import Key2 from "./Key2";

const TypeWriterContainer = () => {
  const fullString = useSelector((state) => state.fullString.fullString);
  const theme = useSelector((state) => state.theme.theme);

  const textinput = useRef();

  const scrollText = () => {
    if (textinput.current) {
      let textLength = textinput.current.value.length || 0;
      let textWidth = textinput.current.clientWidth + textLength;
      textinput.current.style.width = textWidth + "px";
    }
  };

  return (
    <div className=" flex flex-col 2xl:gap-8 xl:gap-8 lg:gap-8 md:gap-2 2xl:mt-20 xl:mt-20 lg:mt-20 md:mt-0 mt-0 ">
      <div
        className={`${
          theme === "writer" ? "textarea" : "textarea2"
        } flex justify-center rounded-lg 2xl:text-xl xl:text-xl lg:text-xl md:text-md overflow-hidden`}
      >
        <input
          ref={textinput}
          type="text"
          onInput={scrollText()}
          className="bg-transparent absolute right-3 top-0 w-auto border-none outline-none text-right 2xl:pt-5 xl:pt-5 lg:pt-5 md:pt-1.5"
          value={fullString}
          readOnly
        />
        <div
          className={`${
            theme === "writer" ? "textarea-gradient" : "textarea-gradient2"
          } rounded-lg h-full w-full absolute left-0 top-0`}
        ></div>
      </div>

      <div
        className={`typeWriterContainer flex flex-col  ${
          theme === "writer" ? "2xl:gap-2 xl:gap-2 lg:gap-2" : "gap-0"
        } items-center rounded-3xl`}
      >
        <Row items={numbers} row={1} />
        <Row items={letters1} row={2} />
        <Row items={letters2} row={3} />
        <Row items={letters3} row={4} />
        <div className={`${theme === "writer" ? "mt-2" : "mt-0"}`}>
          {theme === "writer" ? (
            <Key text={"space"} type={"extra"} />
          ) : (
            <Key2 text={"space"} type={"extra"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TypeWriterContainer;
