import { useEffect, useState } from "react";

export default function Fetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true);

        try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setData(null);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return { loading, data };
}
