import { useEffect, useState } from "react";

export default function Weather({ title }) {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    const fetchApi = async (param) => {
        setLoading(true);

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=537d8c2cd3ac552e6806ebf38a2402b3`
            );
            const result = await response.json();
            setData(result);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setData(null);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApi("Pabna");
    }, []);

    const handleClick = () => {
        fetchApi(query);
        setQuery("");
    };

    const getDate = () => {
        return new Date().toLocaleDateString("en-us", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    };

    return (
        <section>
            <h2 className="title">{title}</h2>
            <div className="p-3">
                <div className="flex gap-3 items-center">
                    <input
                        type="text"
                        placeholder="Location... ex. 'Pabna'"
                        className="h-10 border rounded-sm px-3 grow-1 outline-0"
                        value={query}
                        onChange={(event) => {
                            setQuery(event.target.value);
                        }}
                    />
                    <button
                        className="h-10 border rounded-sm px-6 cursor-pointer hover:bg-cyan-600"
                        onClick={handleClick}
                    >
                        Search
                    </button>
                </div>
                {data ? (
                    <div className="space-y-3 text-center pt-3">
                        <h2 className="font-bold">
                            {data.name}, {data.sys.country}
                        </h2>
                        <p>{getDate()}</p>
                        <h1 className="font-bold !text-5xl">
                            {Math.round(data.main.temp - 273.15)}°C
                        </h1>
                        <p>{data.weather[0].description.toUpperCase()}</p>
                        <div className="flex justify-around items-center gap-3">
                            <div className="flex flex-col">
                                <h2 className="font-bold">{data.wind.speed}</h2>
                                <span>Wind Speed</span>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="font-bold">
                                    {data.main.humidity}
                                </h2>
                                <span>Humidity</span>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    );
}
