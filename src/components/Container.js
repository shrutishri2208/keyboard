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
import Key from "./Key";
import TypeWriterContainer from "./TypeWriterContainer";
import ModernContainer from "./ModernContainer";

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

  return (
    <div className="my-4 w-screen h-screen">
      <h1 className="screen-size text-black"></h1>
      <TypeWriterContainer />
      {/* <ModernContainer /> */}
    </div>
  );
};

export default Container;
