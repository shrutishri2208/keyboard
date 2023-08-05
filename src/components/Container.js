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
import TypeWriterContainer from "./TypeWriterContainer";

const Container = () => {
  const fullString = useSelector((state) => state.fullString.fullString);
  const colour = useSelector((state) => state.colour.colour);

  const [colourOptions, setColourOptions] = useState(false);

  const textArea = useRef();

  return (
    // <div className="container 2xl:pt-28 xl:pt-28 lg:pt-28 md:pt-2 w-full">
    <div className="complete-container w-screen h-screen 2xl:pt-28 xl:pt-28 lg:pt-28 md:pt-16">
      <TypeWriterContainer />
      {/* <h1>HELLo</h1> */}
      {/* <ModernContainer /> */}
    </div>
  );
};

export default Container;
