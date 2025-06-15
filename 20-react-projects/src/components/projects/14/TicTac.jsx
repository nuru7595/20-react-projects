import { useEffect, useState } from "react";

const Square = ({ onClick, value }) => {
    return (
        <button
            className="border h-16 w-16 cursor-pointer font-bold -mb-px -mr-px text-4xl"
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default function TicTac({ title }) {
    const [squares, setSquares] = useState(Array(9).fill(""));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState("");

    const getWinner = (squares) => {
        const winPattern = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winPattern.length; i++) {
            const [x, y, z] = winPattern[i];

            if (
                squares[x] &&
                squares[x] === squares[y] &&
                squares[x] === squares[z]
            ) {
                return squares[x];
            }
        }

        return null;
    };

    const handleClick = (currentSquare) => {
        const cpySquare = [...squares];
        if (getWinner(cpySquare) || cpySquare[currentSquare]) return;
        cpySquare[currentSquare] = isXTurn ? "X" : "O";
        setIsXTurn(!isXTurn);
        setSquares(cpySquare);
    };

    const handleRestart = () => {
        setIsXTurn(true);
        setSquares(Array(9).fill(""));
    };

    useEffect(() => {
        if (!getWinner(squares) && squares.every((item) => item !== "")) {
            setStatus(`This is a draw! Please restart the game.`);
        } else if (getWinner(squares)) {
            setStatus(
                `Winner is ${getWinner(squares)}! Please restart the game.`
            );
        } else {
            setStatus(`Current Player is ${isXTurn ? "X" : "O"}`);
        }
    }, [squares, isXTurn]);

    return (
        <section>
            <h2 className="title">{title}</h2>
            <div className="my-6 grid grid-cols-3 gap-0 justify-center w-fit mx-auto">
                {squares.map((value, index) => (
                    <Square
                        key={index}
                        onClick={() => {
                            handleClick(index);
                        }}
                        value={value}
                    />
                ))}
            </div>
            <h2 className="text-center">{status}</h2>
            <button
                className="border rounded-sm px-4 py-1 block mx-auto my-6 cursor-pointer hover:bg-cyan-600"
                onClick={handleRestart}
            >
                Restart
            </button>
        </section>
    );
}
