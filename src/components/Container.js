import React, { useEffect } from "react";
import Row from "./Row";
import { arrows, letters1, letters2, letters3, numbers } from "../letters";

import { useSelector, useDispatch } from "react-redux";
import { setString } from "../redux/string/stringActions";

const Container = () => {
  const fullString = useSelector((state) => state.fullString.fullString);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyPress = (e) => {
      dispatch(setString(e.key));
      e.stopPropagation();
    };

    window.addEventListener("keypress", handleKeyPress, { once: true });

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  });

  return (
    <div className="bg-black m-20">
      <Row items={numbers} row={"1"} />
      <Row items={letters1} row={"2"} />
      <Row items={letters2} row={"3"} />
      <Row items={letters3} row={"4"} />
      <Row items={arrows} row={"5"} />
      <h1 className="text-copper text-center">LETTER: {fullString}</h1>
    </div>
  );
};

export default Container;
