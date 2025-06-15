import { useRef } from "react";
import Fetch from "./Fetch";

export default function Scroll({ title }) {
    const { loading, data } = Fetch("https://dummyjson.com/products?limit=100");

    const handleTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    const bottomRef = useRef();

    const handleBottom = () => {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section>
            <h2 className="title">{title}</h2>
            <div className="p-3">
                <button
                    className="block border rounded-sm py-1 px-3 mx-auto mb-3 cursor-pointer hover:bg-cyan-600"
                    onClick={handleBottom}
                >
                    Scroll To Bottom
                </button>
                {loading ? (
                    <h3 className="text-center py-3">
                        Fetching Data! Please Wait...
                    </h3>
                ) : (
                    <div className="text-center space-y-2 text-lg">
                        {data && data.products && data.products.length
                            ? data.products.map((item) => (
                                  <p key={item.title}>{item.title}</p>
                              ))
                            : null}
                    </div>
                )}
                <button
                    className="block border rounded-sm py-1 px-3 mx-auto mt-3 cursor-pointer hover:bg-cyan-600"
                    onClick={handleTop}
                    ref={bottomRef}
                >
                    Scroll To Bottom
                </button>
            </div>
        </section>
    );
}
