import Fetch from "./Fetch";

export default function Scroll({ title }) {
    const { loading, data } = Fetch("https://dummyjson.com/products?limit=100");

    return (
        <section>
            <h2 className="title">{title}</h2>
            <div className="p-3">
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
            </div>
        </section>
    );
}
