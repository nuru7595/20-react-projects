import { useState } from "react";

export default function TabChild({ data }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (clickedIndex) => {
        setActiveIndex(clickedIndex);
    };

    return (
        <div>
            <div className="flex justify-center items-center my-3">
                {data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`bg-sky-600 py-2 px-4 text-white cursor-pointer duration-300 ${
                                activeIndex === index
                                    ? "bg-sky-900"
                                    : "hover:bg-sky-500"
                            }`}
                            onClick={() => {
                                handleClick(index);
                            }}
                        >
                            {item.label}
                        </div>
                    );
                })}
            </div>
            <div className="m-3 text-white border border-white p-1">
                {data[activeIndex].content}
            </div>
        </div>
    );
}
