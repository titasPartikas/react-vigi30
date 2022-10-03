import Board from "./Board";
import { useState } from "react";
import calculateWinner from "../utils/declareWinner";

const defaultSquaresState = Array(9).fill(null);

function Game() {
  const [squares, setSquares] = useState(defaultSquaresState);
  const [lastValue, setLastValue] = useState(null);

  const getGameTitle = () => {
    const winner = calculateWinner(squares);
    const isGamerOver = squares.every((square) => square);

    if (winner) {
      return `Winner is ${winner}`;
    }
    if (isGamerOver) {
      return "Game over";
    }

    return `Next player move: ${lastValue ? getValue() : "X"}`;
  };

  const getValue = () => {
    switch (lastValue) {
      case "X":
        return "O";
      case "O":
        return "X";
      default:
        return "X";
    }
  };
  const onResetGame = () => {
    setSquares(defaultSquaresState);
    setLastValue(null);
  };

  return (
    <div className="game">
      <div className="status">{getGameTitle()}</div>
      <div className="game-board">
        <Board
          setSquares={setSquares}
          setLastValue={setLastValue}
          squares={squares}
          getValue={getValue}
        />
      </div>
      <div className="game-info">
        <button onClick={onResetGame}>Restart Game</button>
      </div>
    </div>
  );
}

export default Game;
