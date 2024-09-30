import React, { useState } from "react";

function Circles({ color }) {
    const [count, setCount] = useState(0);

    const handleClickMinus = () => setCount(count - 1);
    const handleClickPlus = () => setCount(count + 1);

    if (count == -1) {
        handleClickPlus();
    }

    return (
        <div>
            <button onClick={handleClickMinus}>-</button>
            <p>{count}</p>
            <button onClick={handleClickPlus}>+</button>
            <p>{color}</p>
        </div>
    );
}

export default Circles;
