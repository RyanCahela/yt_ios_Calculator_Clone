import React from "react";

const FunctionButtons = () => {
  return (
    <>
      <button
        value="all_clear"
        onClick={(e) => handleFunctionButtonPress(e)}
        className="btn bg-gray-300 text-black hover:bg-gray-200">
        AC
      </button>
      <button
        value="plus_minus"
        onClick={(e) => handleFunctionButtonPress(e)}
        className="btn bg-gray-300 text-black hover:bg-gray-200">
        +/-
      </button>
      <button
        value="backspace"
        onClick={(e) => handleFunctionButtonPress(e)}
        className="btn bg-gray-300 text-black hover:bg-gray-200">
        &lt;-
      </button>
    </>
  );
};

export default FunctionButtons;
