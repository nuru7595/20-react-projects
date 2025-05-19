import { useState } from "react";
import { users } from "./users";

export default function AutoComplete({ title }) {
    const [user, setUser] = useState("");

    const handleChange = (e) => {
        setUser(e.target.value);
    };

    return (
        <section>
            <h2 className="title">{title}</h2>
            <form
                className="flex gap-3 p-3 flex-col sm:flex-row justify-center items-center"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    type="text"
                    name="userName"
                    placeholder="Try to type a name here . . ."
                    className="border border-black rounded-md px-2 py-1 sm:max-w-64 w-full outline-none"
                    value={user}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />
                <button
                    type="submit"
                    className="border border-black py-1 px-3 rounded-md bg-emerald-600 hover:bg-emerald-500 cursor-pointer w-full sm:w-auto"
                >
                    Search
                </button>
            </form>
        </section>
    );
}
