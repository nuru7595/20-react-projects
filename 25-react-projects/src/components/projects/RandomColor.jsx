import { useState } from "react";

export default function RandomColor({ title }) {
    const [color, setColor] = useState(true);
    const [randHex, setRandHex] = useState("#06B6D4");
    const [randRgb, setRandRgb] = useState("rgb(6, 182, 212)");
    const flipColor = () => {
        if (color) {
            rgbSwitch();
        } else {
            hexSwitch();
        }
        setColor((x) => !x);
    };
    const randNum = (len) => {
        return Math.floor(Math.random() * len);
    };
    const hexSwitch = () => {
        const arr = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
        ];
        let newHex = "#";
        for (let i = 0; i < 6; i++) {
            newHex += arr[randNum(arr.length)];
        }
        setRandHex(newHex);
    };

    const rgbSwitch = () => {
        const r = randNum(256);
        const g = randNum(256);
        const b = randNum(256);
        setRandRgb(`rgb(${r}, ${g}, ${b})`);
    };

    return (
        <section>
            <h2 className="title">{title}</h2>
            <div
                className="random-color"
                style={{ backgroundColor: color ? randHex : randRgb }}
            >
                <div className="flex justify-center items-center gap-3">
                    <button onClick={color ? hexSwitch : rgbSwitch}>
                        Generate Color
                    </button>
                    <button onClick={flipColor}>
                        Switch to {color ? "RGB" : "HEX"} Color
                    </button>
                </div>
                <div className="random-color-text">
                    <h3>{color ? "Hex Color Code:" : "RGB Color Code:"}</h3>
                    <h3>{color ? randHex : randRgb}</h3>
                </div>
            </div>
        </section>
    );
}
