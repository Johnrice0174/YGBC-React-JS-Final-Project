import React, { useState } from "react";
import {Helmet} from 'react-helmet';
import Square from "./Square";
import { WinningLogic } from "./Helper";

function TicTacToe() {
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setXNext] = useState(true);

  const winningInfo = WinningLogic(squares);
  const winner = winningInfo.winner;

  const winnerHighlight = winningInfo.line;
  let status;
  if (winner) {
    status = "Hurray the winner is " + winner;
  } else if (winningInfo.isDraw) {
    status = "It's a Draw";
  } else {
    status = "Current Player is " + (isXNext ? "X" : "O");
  }

  function renderSquare(i) {
    return (
      <Square
        onClick={() => {
          const nextSquare = squares.slice();
          nextSquare[i] = isXNext ? "X" : "O";
          setXNext(!isXNext);
          setSquare(nextSquare);
        }}
        value={squares[i]}
        highlightWinner={winnerHighlight && winnerHighlight.includes(i)}
      />
    );
  }

  return (
    <div className="tictactoe">
      <Helmet><title>YGBC- TicTacToe</title></Helmet>
      <h1>
        <span id="tic">Tic</span>
        <span id="tac">Tac</span>
        <span id="toe">Toe</span>
      </h1>
      <div className="ttt-status">{status}</div>
      <div className="ttt-board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className="ttt-board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>

      <div className="ttt-board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button id="ttt-newgame"><a href="/tictactoe">New Game</a></button>
    </div>
  );
}

export default TicTacToe;
