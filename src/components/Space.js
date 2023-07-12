import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSpace } from "../redux/string/stringActions";

const Space = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button
        className={`bg-copper h-12 w-80 rounded-t-lg rounded-b-3xl font-semibold text-transparent ${
          clicked === true ? "button-clicked" : ""
        }`}
        onClick={() => {
          dispatch(setSpace());
          setClicked(true);
          setTimeout(() => {
            setClicked(false);
          }, 100);
        }}
      >
        space
      </button>
    </div>
  );
};

export default Space;
