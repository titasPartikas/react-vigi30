function Square({ state, onClick, index }) {
  return (
    <button className="square" onClick={() => onClick(index)}>
      {state}
    </button>
  );
}

export default Square;
