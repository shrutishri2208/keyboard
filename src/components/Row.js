import React, { useEffect } from "react";
import Button from "./Button";
import Backspace from "./Backspace";
import { letters1 } from "../letters";
import Tab from "./Tab";
import Capslock from "./Capslock";
import Enter from "./Enter";
import Shift from "./Shift";
import Control from "./Control";
import Alt from "./Alt";
import Function from "./Function";
import Space from "./Space";

const Row = ({ items, row }) => {
  return (
    <div className="my-2 flex lg:gap-4 md:gap-2 sm:gap-1 items-center justify-center ">
      {row === "2" && <Tab />}
      {row === "3" && <Capslock />}
      {row === "4" && <Shift />}
      {row === "5" && <Control />}
      {row === "5" && <Function />}
      {row === "5" && <Alt />}
      {row === "5" && <Space />}
      {row === "5" && <Alt />}
      {row === "5" && <Control />}

      {items &&
        items.map((item, index) => {
          return <Button {...item} key={index} />;
        })}
      {row === "1" && <Backspace />}
      {row === "3" && <Enter />}
      {row === "4" && <Shift />}
    </div>
  );
};

export default Row;
