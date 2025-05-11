import { useEffect, useState } from "react";
import Empty from "../../Empty";

export default function LoadMore({ title }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);

    const loaded = 20;
    const max = 80;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    `https://dummyjson.com/products?limit=20&skip=${count}&select=title,price,thumbnail`
                );
                const jsonData = await res.json();
                setData((prevData) => [...prevData, ...jsonData.products]);
            } catch {
                setData([]);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [count]);

    return (
        <section>
            <h2 className="title">{title}</h2>
            <div className="p-5">
                {loading && data.length === 0 ? (
                    <Empty msg="Loading Products . . ." />
                ) : data.length > 0 ? (
                    <div className="load-more">
                        <div>
                            {data.map((product) => (
                                <div className="product" key={product.id}>
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <h3>{product.title}</h3>
                                        <h3 className="font-bold">
                                            ${product.price}
                                        </h3>
                                        <button>Buy Now</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => setCount((prev) => prev + loaded)}
                            disabled={count === max}
                        >
                            {count === max
                                ? "All Products Loaded!"
                                : "Load More"}
                        </button>
                    </div>
                ) : (
                    <Empty msg="Data not found!!" color="text-red-600" />
                )}
            </div>
        </section>
    );
}
