import React, { useState } from "react";
import TypeWriterContainer from "./TypeWriterContainer";
import { useSelector } from "react-redux";

const Container = () => {
  const [orientation, setOrientation] = useState(window.orientation);
  const theme = useSelector((state) => state.theme.theme);

  console.log(orientation);

  console.log(window.orientation);
  return (
    <div
      className={` ${
        theme === "writer"
          ? "complete-container-writer"
          : "complete-container-modern"
      } w-screen h-screen 2xl:pt-28 xl:pt-28 lg:pt-28 md:pt-2`}
    >
      <TypeWriterContainer />
    </div>
  );
};

export default Container;
