import { useState } from "react";
import "./starRating.css";
import { FaStar } from "react-icons/fa";

export default function StarRating({ number = 10 }) {
    const [rate, setRate] = useState(0);
    const [hover, setHover] = useState(0);
    const handleClick = (i) => {
        setRate(i);
    };
    const handleHover = (i) => {
        setHover(i);
    };
    const handleLeave = () => {
        setHover(rate);
    };

    return (
        <section>
            <h2 className="title">Star Rating</h2>
            <div className="star-parent">
                {[...Array(number)].map((_, i) => {
                    i += 1;
                    return (
                        <FaStar
                            key={i}
                            size={40}
                            className={
                                i <= (hover || rate)
                                    ? "text-yellow-300"
                                    : "text-black"
                            }
                            onClick={() => {
                                handleClick(i);
                            }}
                            onMouseMove={() => {
                                handleHover(i);
                            }}
                            onMouseLeave={handleLeave}
                        />
                    );
                })}
            </div>
        </section>
    );
}
