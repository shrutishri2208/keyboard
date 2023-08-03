import React, { useRef, useEffect } from "react";
import Row from "./Row";
import Key from "./Key";
import { numbers, letters1, letters2, letters3 } from "../letters";
import { useSelector } from "react-redux";

const TypeWriterContainer = () => {
  const fullString = useSelector((state) => state.fullString.fullString);

  const textHeight = useRef(null);

  const setHeight = () => {
    let scrollHeight = 0;
    if (textHeight.current) {
      textHeight.current.style.height = "auto";
      scrollHeight = textHeight.current.scrollHeight;
      if (scrollHeight > textHeight.current.clientHeight) {
        textHeight.current.style.height = scrollHeight + 10 + "px";
      }
    }
  };

  return (
    <div className="typeWriterContainer flex flex-col gap-2 items-center p-4">
      <textarea
        onChange={setHeight()}
        ref={textHeight}
        className="mb-4 w-2/3 text-black px-4 py-2 text-lg font-semibold rounded-md"
        value={fullString}
      ></textarea>

      <Row items={numbers} row={1} />
      <Row items={letters1} row={2} />
      <Row items={letters2} row={3} />
      <Row items={letters3} row={4} />
      {/* <Key text={"space"} type={"extra"} /> */}
    </div>
  );
};

export default TypeWriterContainer;
