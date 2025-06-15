export default function User({ userData }) {
    const {
        avatar_url,
        bio,
        created_at,
        followers,
        following,
        html_url,
        location,
        name,
        login,
        public_repos,
        updated_at,
    } = userData;
    const created = new Date(created_at);
    const year = created.getFullYear();
    const month = created.toLocaleString("en-us", { month: "short" });
    const date = created.getDate();
    const updated = new Date(updated_at);
    const year_u = updated.getFullYear();
    const month_u = updated.toLocaleString("en-us", { month: "short" });
    const date_u = updated.getDate();
    const repos_url = `https://github.com/${login}?tab=repositories`;

    return (
        <div className="py-6 px-3 flex flex-col gap-3 border-t-4 border-zinc-800">
            <div className="max-w-36 mx-auto">
                <a href={html_url} target="_blank">
                    <img
                        src={avatar_url}
                        alt="Avatar"
                        className="rounded-full max-w-full border-2 border-black"
                    />
                </a>
            </div>
            <h3 className="font-bold text-center">
                <a href={html_url} target="_blank">
                    {name || login}
                </a>
            </h3>
            <p
                className={`text-center ${
                    location ? "font-bold" : "text-red-700"
                }`}
            >
                {location ? location : "No Location added yet!"}
            </p>
            <p className={`text-center ${bio ? null : "text-red-700"}`}>
                {bio ? bio : "No bio added yet!"}
            </p>
            <div className="flex flex-col sm:flex-row justify-around items-center gap-3">
                <p>
                    Joined On:{" "}
                    <span className="font-bold">{`${date} ${month} ${year}`}</span>
                </p>
                <p>
                    Profile Updated:{" "}
                    <span className="font-bold">{`${date_u} ${month_u} ${year_u}`}</span>
                </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-around items-center gap-3">
                <p>
                    Followers: <span className="font-bold">{followers}</span>
                </p>
                <p>
                    Following: <span className="font-bold">{following}</span>
                </p>
            </div>
            <p className="text-center">
                Public Repositories:{" "}
                <span className="font-bold">{public_repos}</span>
            </p>
            <p className="text-center font-bold underline">
                <a href={repos_url} target="_blank">
                    View Repositories
                </a>
            </p>
        </div>
    );
}
