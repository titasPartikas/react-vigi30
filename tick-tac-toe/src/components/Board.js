import Square from "./Square";
import calculateWinner from "../utils/declareWinner";

function Board({ squares, setSquares, setLastValue, getValue }) {
  const renderSquare = (index) => {
    return <Square state={squares[index]} onClick={onClick} index={index} />;
  };

  const onClick = (index) => {
    const updatedSquares = [...squares];
    if (calculateWinner(squares) || updatedSquares[index]) {
      return;
    }
    const nextValue = getValue();
    updatedSquares[index] = nextValue;
    setLastValue(nextValue);
    setSquares(updatedSquares);
  };

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
