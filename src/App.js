import React, { useState } from "react";
import Container from "./components/Container";
import scroll from "./assets/scroll.png";
import alien from "./assets/alien.png";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./redux/theme/themeActions";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const [change, setChange] = useState(false);

  return (
    <div className="App">
      <div
        className={`bg-black h-screen w-screen absolute z-30 duration-500 ${
          change === true ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <button
        onClick={() => {
          if (theme === "writer") {
            setTimeout(() => {
              dispatch(setTheme("modern"));
            }, 300);
          } else {
            setTimeout(() => {
              dispatch(setTheme("writer"));
            }, 300);
          }
          setChange(true);
          setTimeout(() => {
            setChange(false);
          }, 500);
        }}
        className={`relative z-40 ${
          theme === "writer"
            ? "theme-button theme-button-border"
            : "theme-button2 theme-button-border2"
        } flex justify-center items-center`}
      >
        {theme === "writer" ? <img src={alien} /> : <img src={scroll} />}
      </button>
      <Container />
    </div>
  );
}

export default App;
