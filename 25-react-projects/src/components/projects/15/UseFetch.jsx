import Fetch from "./Fetch";

export default function UseFetch({ title }) {
    const { loading, data } = Fetch("https://dummyjson.com/products");
    console.log(data);
    return (
        <section>
            <h2 className="title">{title}</h2>
            <div className="p-3 text-center">
                {loading ? <h4>Fetching data! Please wait...</h4> : null}
                {data && data.products && data.products.length ? (
                    <ul>
                        {data.products.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </section>
    );
}
