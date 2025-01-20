import { useEffect, useState } from "react";
import Empty from "../Empty";
import {
    BiSolidLeftArrowCircle,
    BiSolidRightArrowCircle,
} from "react-icons/bi";

export default function Slider({ title }) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [active, setActive] = useState(0);
    // State Values;

    const apiCall = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                "https://picsum.photos/v2/list?page=1&limit=10"
            );
            const jsonData = await response.json();
            setData(jsonData);
        } catch {
            console.log("Api Connection Broken!!");
        }
        setIsLoading(false);
    };

    useEffect(() => {
        apiCall();
    }, []);

    const handleLeft = () => {
        setActive((x) => (x === 0 ? data.length - 1 : --x));
    };

    const handleRight = () => {
        setActive((x) => (x === data.length - 1 ? 0 : ++x));
    };

    return (
        <section>
            <h2 className="title">{title}</h2>
            <div className="py-6 px-3 slider">
                {isLoading ? (
                    <Empty msg="Loading . . ." />
                ) : data ? (
                    <div className="max-w-[600px] mx-auto relative">
                        <BiSolidLeftArrowCircle
                            onClick={handleLeft}
                            className="text-5xl text-white border-2 bg-black rounded-full absolute top-1/2 left-3 cursor-pointer -translate-y-1/2"
                        />
                        <BiSolidRightArrowCircle
                            onClick={handleRight}
                            className="text-5xl text-white border-2 bg-black rounded-full absolute top-1/2 right-3 cursor-pointer -translate-y-1/2"
                        />
                        {data.map((x, i) => (
                            <img
                                key={i}
                                src={x.download_url}
                                alt={`Image of ${x.author}`}
                                className={i === active ? "block" : "hidden"}
                            />
                        ))}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-center items-center gap-1">
                            {data.map((_, i) => (
                                <span
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className={
                                        active === i
                                            ? "border-white bg-black"
                                            : "border-black bg-white"
                                    }
                                ></span>
                            ))}
                        </div>
                    </div>
                ) : (
                    <Empty msg="Data not found!!" color="text-red-600" />
                )}
            </div>
        </section>
    );
}
