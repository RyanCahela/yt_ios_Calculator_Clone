import React from "react";

const NumpadButtons = () => {
  return (
    <>
      {Array(9)
        .fill("")
        .map((emptyString, index, arr) => {
          console.log("length", arr.length);
          return (
            <button
              key={index}
              value={arr.length - index}
              onClick={(e) => handleNumpadButtonPress(e)}
              className="btn bg-slate-600 hover:bg-slate-400 active:bg-slate-800 ">
              {arr.length - index}
            </button>
          );
        })}
      <button
        value={0}
        onClick={(e) => handleNumpadButtonPress(e)}
        className="btn bg-slate-600 hover:bg-slate-400 active:bg-slate-800 col-start-1 col-end-3 w-full text-left px-8">
        0
      </button>
    </>
  );
};

export default NumpadButtons;
