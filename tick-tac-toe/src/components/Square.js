import { useState } from "react";

function Square({ number }) {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <button className="square" onClick={() => {
            setIsClicked(true);
        }}>
            {number}
        </button>)
}

export default Square;
