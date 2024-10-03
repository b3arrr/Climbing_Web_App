import React, { useState } from "react";
import "../style/grading.css";

function Circles({ color, count, onMinus, onPlus }) {
    const circleStyle = {
        backgroundColor: color,
    };

    return (
        <>
            <div id="grade">
                <button onClick={onMinus}>-</button>
                <span
                    className="dot"
                    style={circleStyle}
                    onClick={onPlus}
                ></span>
                <button onClick={onPlus}>+</button>
            </div>
            <p>{count}</p>
        </>
    );
}

export default function Grading() {
    // State to track counts for all circles
    const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0, 0]);

    // Handlers for incrementing/decrementing specific circles
    const handleMinus = (index) => {
        const newCounts = [...counts];
        newCounts[index] = Math.max(newCounts[index] - 1, 0); // Prevent count from going negative
        setCounts(newCounts);
    };

    const handlePlus = (index) => {
        const newCounts = [...counts];
        newCounts[index] += 1;
        setCounts(newCounts);
    };

    // Handler for resetting all counts to 0
    const handleClickReset = () => {
        setCounts([0, 0, 0, 0, 0, 0, 0]);
    };

    return (
        <>
            <h1>Grading Page</h1>
            <div id="circleWrapper">
                <Circles
                    color="White"
                    count={counts[0]}
                    onMinus={() => handleMinus(0)}
                    onPlus={() => handlePlus(0)}
                />
                <Circles
                    color="Green"
                    count={counts[1]}
                    onMinus={() => handleMinus(1)}
                    onPlus={() => handlePlus(1)}
                />
                <Circles
                    color="#2769e3"
                    count={counts[2]}
                    onMinus={() => handleMinus(2)}
                    onPlus={() => handlePlus(2)}
                />
                <Circles
                    color="#e3e027"
                    count={counts[3]}
                    onMinus={() => handleMinus(3)}
                    onPlus={() => handlePlus(3)}
                />
                <Circles
                    color="#e33927"
                    count={counts[4]}
                    onMinus={() => handleMinus(4)}
                    onPlus={() => handlePlus(4)}
                />
                <Circles
                    color="Black"
                    count={counts[5]}
                    onMinus={() => handleMinus(5)}
                    onPlus={() => handlePlus(5)}
                />
                <Circles
                    color="#a3a3a3"
                    count={counts[6]}
                    onMinus={() => handleMinus(6)}
                    onPlus={() => handlePlus(6)}
                />
            <button id="resetButton" onClick={handleClickReset}>Reset</button>

            </div>
            <button>Save</button>
        </>
    );
}
