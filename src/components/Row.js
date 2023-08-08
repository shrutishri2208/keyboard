import React from "react";
import Key from "./Key";
import Key2 from "./Key2";
import { useSelector } from "react-redux";

const Row = ({ items, row }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={`flex ${theme === "writer" ? "gap-4" : "gap-0"}`}>
      {row === 3 && (
        <div className="flex gap-2">
          {theme === "writer" ? (
            <Key text={"caps"} type={"extra"} />
          ) : (
            <Key2 text={"caps"} type={"extra"} />
          )}
        </div>
      )}
      {items.map((item, index) => {
        if (theme === "writer") {
          return <Key {...item} key={index} />;
        } else {
          return <Key2 {...item} key={index} />;
        }
      })}
      {row === 1 && (
        <div className="flex gap-2">
          {theme === "writer" ? (
            <Key text={"back"} type={"extra"} />
          ) : (
            <Key2 text={"back"} type={"extra"} />
          )}
        </div>
      )}
      {row === 3 && (
        <div className="flex gap-2">
          {theme === "writer" ? (
            <Key text={"tab"} type={"extra"} />
          ) : (
            <Key2 text={"tab"} type={"extra"} />
          )}
        </div>
      )}
    </div>
  );
};

export default Row;
