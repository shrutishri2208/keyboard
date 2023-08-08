import React from "react";
import Container from "./components/Container";
import scroll from "./assets/scroll.png";
import alien from "./assets/alien.png";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./redux/theme/themeActions";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className="App">
      <button
        onClick={() => {
          if (theme === "writer") {
            dispatch(setTheme("modern"));
          } else {
            dispatch(setTheme("writer"));
          }
        }}
        className={` ${
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
