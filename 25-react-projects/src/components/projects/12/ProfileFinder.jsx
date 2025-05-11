import { useState } from "react";
import User from "./User";

export default function ProfileFinder({ title }) {
    const [userName, setUserName] = useState("nuru7595");

    const handleSubmit = (formData) => {
        setUserName(formData.get("userName"));
    };

    return (
        <section>
            <h2 className="title">{title}</h2>
            <form action={handleSubmit}>
                <input
                    type="text"
                    name="userName"
                    placeholder="Search Github Username . . ."
                    value={userName}
                />
                <button type="submit">Search</button>
            </form>
            <User userData="" />
        </section>
    );
}
