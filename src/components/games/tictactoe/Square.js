import React from "react";

function Square({ onClick, value, highlightWinner }) {
  const className = "ttt-square" + (highlightWinner ? "highlight" : "");
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
