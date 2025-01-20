import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Rating({ title }) {
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
            <h2 className="title">{title}</h2>
            <div className="flex justify-center items-center py-6 px-3">
                {[...Array(10)].map((_, i) => {
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
