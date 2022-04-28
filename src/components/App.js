import React from "react";
import "../styles/App.css";
const App = () => {
  let numClicks = 0;
  let singleClickTimer;
  const handleClick = () => {
    numClicks++;
    if (numClicks === 1) {
      singleClickTimer = setTimeout(() => {
        numClicks = 0;
        console.log("single click!");
      }, 400);
    } else if (numClicks === 2) {
      clearTimeout(singleClickTimer);
      numClicks = 0;
      console.log("double click!");
    }
  };

  return (
    <div id="main">
      <button
        id="dblclick-btn"
        onClick={(event) => {
          handleClick(event);
        }}
      >
        Double click me
      </button>
    </div>
  );
};

export default App;
