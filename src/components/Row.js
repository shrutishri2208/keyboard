import React, { useEffect } from "react";
import Button from "./Button";
import { extraKeys } from "../letters";
import ExtraKeys from "./ExtraKeys";
import Key from "./Key";

const Row = ({ items, row }) => {
  return (
    <div className="flex gap-2">
      {row === 3 && (
        <div className="flex gap-2">
          <Key text={"caps\nlock"} type={"extra"} />
        </div>
      )}
      {items.map((item) => {
        return <Key {...item} />;
      })}
      {row === 1 && (
        <div className="flex gap-2">
          <Key text={"back\nspace"} type={"extra"} />
        </div>
      )}
      {row === 3 && (
        <div className="flex gap-2">
          <Key text={"enter"} type={"extra"} />
        </div>
      )}
      {/* {row === 4 && (
        <div className="flex gap-2">
          <Key text={"shift"} type={"extra"} />
        </div>
      )} */}
    </div>
    // <div className="sm:my-2 my-1 flex lg:gap-3 md:gap-2 sm:gap-1 gap-0.75 items-center justify-center w-max m-auto ">
    //   {row === "2" && <ExtraKeys {...extraKeys[8]} />}
    //   {row === "3" && <ExtraKeys {...extraKeys[9]} />}
    //   {row === "4" && <ExtraKeys {...extraKeys[11]} />}

    //   {items &&
    //     items.map((item, index) => {
    //       return <Button {...item} key={index} />;
    //     })}
    //   {row === "1" && <ExtraKeys {...extraKeys[7]} />}
    //   {row === "3" && <ExtraKeys {...extraKeys[10]} />}
    //   {row === "4" && <ExtraKeys {...extraKeys[11]} />}
    // </div>
  );
};

export default Row;
