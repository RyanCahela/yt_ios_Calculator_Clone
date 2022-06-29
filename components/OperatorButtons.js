import React from "react";

const OperatorButtons = () => {
  return (
    <>
      <button
        value="divide"
        onClick={(e) => handleOperatorButtonPress(e)}
        className="btn col-start-4 col-end-5 bg-orange-400 hover:bg-orange-200 active:bg-orange-500">
        /
      </button>
      <button
        value="multiply"
        onClick={(e) => handleOperatorButtonPress(e)}
        className="btn col-start-4 col-end-5 bg-orange-400 hover:bg-orange-200 active:bg-orange-500">
        X
      </button>
      <button
        value="subtract"
        onClick={(e) => handleOperatorButtonPress(e)}
        className="btn col-start-4 col-end-5 bg-orange-400 hover:bg-orange-200 active:bg-orange-500">
        -
      </button>
      <button
        value="add"
        onClick={(e) => handleOperatorButtonPress(e)}
        className="btn col-start-4 col-end-5 bg-orange-400 hover:bg-orange-200 active:bg-orange-500">
        +
      </button>
      <button
        value="equals"
        onClick={(e) => handleOperatorButtonPress(e)}
        className="btn col-start-4 col-end-5 row-start-5 row-end-6 bg-orange-400 hover:bg-orange-200 active:bg-orange-500">
        =
      </button>
    </>
  );
};

export default OperatorButtons;
