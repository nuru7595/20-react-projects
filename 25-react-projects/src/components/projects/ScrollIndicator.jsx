import { useEffect, useRef, useState } from "react";
import Empty from "../Empty";

export default function ScrollIndicator({ title }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const refDiv = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const URL = "https://dummyjson.com/products?limit=100&select=title";
    useEffect(() => {
        setLoading(true);
        const loadData = async () => {
            try {
                const data = await fetch(URL);
                const dataJson = await data.json();
                setData(dataJson);
            } catch (e) {
                console.log(`Error Fetching Data: ${e}`);
            }
            setLoading(false);
        };
        loadData();
    }, [URL]);

    useEffect(() => {
        const scrollContainer = refDiv.current;

        const handleScroll = () => {
            const scrollHeight =
                scrollContainer.scrollHeight - scrollContainer.clientHeight;
            const scrollTop = scrollContainer.scrollTop;
            setScrollProgress((scrollTop / scrollHeight) * 100);
        };

        scrollContainer.addEventListener("scroll", handleScroll);
        return () => {
            scrollContainer.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section>
            <h2 className="title !border-0">{title}</h2>
            <div className="bg-stone-800 w-full">
                <div
                    className="h-1 bg-indigo-500"
                    style={{ width: `${scrollProgress}%` }}
                ></div>
            </div>
            <div ref={refDiv} className="p-3 h-[500px] overflow-y-scroll">
                {loading ? (
                    <Empty msg="Loading . . ." />
                ) : data && data.products && data.products.length ? (
                    data.products?.map((x) => (
                        <h3 className="py-3 text-center" key={x.id}>
                            {x.title}
                        </h3>
                    ))
                ) : (
                    <Empty msg="Data Not Found!" />
                )}
            </div>
        </section>
    );
}
