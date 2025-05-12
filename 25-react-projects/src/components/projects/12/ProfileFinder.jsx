import { useEffect, useState } from "react";
import User from "./User";
import Empty from "../../Empty";

export default function ProfileFinder({ title }) {
    const [userName, setUserName] = useState("nuru7595");
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState(null);
    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        setUserName(e.target.value);
    };

    const handleSubmit = async () => {
        setLoading(true);
        setErr(null);

        try {
            const res = await fetch(`https://api.github.com/users/${userName}`);
            if (!res.ok) {
                throw new Error("User not found!!");
            }
            const data = await res.json();
            setUserData(data);
        } catch (err) {
            setErr(err.message);
            setUserData(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleSubmit();
    }, []);

    return (
        <section>
            <h2 className="title">{title}</h2>
            <form
                className="flex gap-3 p-3 flex-col sm:flex-row justify-center items-center"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <input
                    type="text"
                    name="userName"
                    placeholder="Search Github Username . . ."
                    value={userName}
                    autoFocus
                    onFocus={(e) => {
                        e.target.select();
                    }}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    className="border border-black rounded-md px-2 py-1 sm:max-w-64 w-full outline-none"
                />
                <button
                    type="submit"
                    className="border border-black py-1 px-3 rounded-md bg-emerald-600 hover:bg-emerald-500 cursor-pointer w-full sm:w-auto"
                >
                    Search
                </button>
            </form>
            {loading ? (
                <div className="border-4 border-black w-8 h-8 my-6 rounded-full mx-auto animate-spin border-dashed"></div>
            ) : userData ? (
                <User userData={userData} />
            ) : (
                <Empty msg={err} />
            )}
        </section>
    );
}
