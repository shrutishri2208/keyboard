import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteString } from "../redux/string/stringActions";

const Backspace = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button
        className={`bg-copper h-12 w-24 rounded-t-lg rounded-b-3xl font-semibold  ${
          clicked === true ? "button-clicked" : ""
        }`}
        onClick={() => {
          dispatch(deleteString());
          setClicked(true);
          setTimeout(() => {
            setClicked(false);
          }, 100);
        }}
      >
        backspace
      </button>
    </div>
  );
};

export default Backspace;
