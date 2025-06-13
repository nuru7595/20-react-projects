import { useEffect, useState } from "react";

export default function AutoComplete({ title }) {
    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    async function fetchUsers() {
        try {
            setLoading(true);
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();

            if (data && data.users) {
                setLoading(false);
                setUsers(data.users.map((user) => user.firstName));
            }
        } catch (error) {
            console.log(error);
            setUsers([]);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchParam(query);
        if (query.length > 1) {
            const filteredData =
                users && users.length
                    ? users.filter(
                          (user) => user.toLowerCase().indexOf(query) > -1
                      )
                    : [];
            setShowDropdown(true);
            setFilteredUsers(filteredData);
        } else {
            setShowDropdown(false);
        }
    };

    const handleClick = (e) => {
        setSearchParam(e.target.innerText);
        setShowDropdown(false);
        setFilteredUsers([]);
    };

    return (
        <section>
            <h2 className="title">{title}</h2>
            <div className="min-h-56 p-3">
                {loading ? (
                    <h4 className="text-center">
                        Fetching Users, Please wait...
                    </h4>
                ) : (
                    <form
                        className="mx-auto sm:max-w-76 w-full"
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <input
                            type="text"
                            name="userName"
                            placeholder="Try to type a name here . . ."
                            className="border border-black rounded-md px-2 py-1 w-full outline-none"
                            value={searchParam}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </form>
                )}
                {showDropdown && filteredUsers && filteredUsers.length ? (
                    <div className="mx-auto w-full max-w-76 border-x border-t mt-3">
                        <ul className="text-center">
                            {filteredUsers.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        onClick={handleClick}
                                        className="border-b cursor-pointer hover:bg-cyan-600 py-1"
                                    >
                                        {item}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ) : null}
            </div>
        </section>
    );
}
