import React, { useEffect } from "react";
import Row from "./Row";
import { arrows, letters1, letters2, letters3, numbers } from "../letters";

import { useSelector, useDispatch } from "react-redux";
import { setString } from "../redux/string/stringActions";
import { setCapital } from "../redux/capital/capitalActions";

const Container = () => {
  const fullString = useSelector((state) => state.fullString.fullString);
  const dispatch = useDispatch();

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
    <div className=" m-20">
      <Row items={numbers} row={"1"} />
      <Row items={letters1} row={"2"} />
      <Row items={letters2} row={"3"} />
      <Row items={letters3} row={"4"} />
      <Row items={arrows} row={"5"} />
      {/* <textarea value={fullString}></textarea> */}
      <pre>
        <h1 className="text-copper text-2xl text-center">
          TYPE SOMETHING:{fullString}
        </h1>
      </pre>
    </div>
  );
};

export default Container;
