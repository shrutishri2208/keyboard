import React, { useState } from "react";
import TypeWriterContainer from "./TypeWriterContainer";

const Container = () => {
  const [orientation, setOrientation] = useState(window.orientation);

  console.log(orientation);

  console.log(window.orientation);
  return (
    <div className="complete-container w-screen h-screen 2xl:pt-28 xl:pt-28 lg:pt-28 md:pt-2">
      <TypeWriterContainer />
    </div>
  );
};

export default Container;
