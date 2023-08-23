import React, { useState } from "react";
import TypeWriterContainer from "./TypeWriterContainer";
import { useSelector } from "react-redux";
import mobile from "../assets/mobile.png";

const Container = () => {
  const [orientation, setOrientation] = useState(window.orientation);
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={` ${
        theme === "writer"
          ? "complete-container-writer"
          : "complete-container-modern"
      } w-screen h-screen 2xl:pt-28 xl:pt-28 lg:pt-28 md:pt-2`}
    >
      <div className="rotate-container h-screen w-screen absolute z-50 flex justify-center items-center">
        <div className="flex gap-4">
          <div>
            <img
              src={mobile}
              style={{ height: "100px", width: "120px", color: "white" }}
            />
          </div>
          <div className="text-center">
            <p>FOR THE BEST EXPERIENCE</p>
            <p
              style={{
                fontSize: "3.5rem",
                lineHeight: "2.6rem",
                fontWeight: "bold",
              }}
            >
              ROTATE
            </p>
            <p style={{ fontSize: "2.05rem", lineHeight: "2.2rem" }}>
              YOUR PHONE
            </p>
          </div>
        </div>
      </div>
      <TypeWriterContainer />
    </div>
  );
};

export default Container;
