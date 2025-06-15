import { useRef } from "react";

export default function ScrollTo({ title }) {
    const divs = [
        {
            label: "Section 1",
            color: "bg-red-500",
        },
        {
            label: "Section 2",
            color: "bg-stone-500",
        },
        {
            label: "Section 3",
            color: "bg-green-500",
        },
        {
            label: "Section 4",
            color: "bg-purple-500",
        },
        {
            label: "Section 5",
            color: "bg-orange-500",
        },
    ];

    const ref = useRef();

    const handleScroll = () => {
        let pos = ref.current.getBoundingClientRect().top;
        window.scrollTo({
            top: pos,
            behavior: "smooth",
        });
    };

    return (
        <section>
            <h2 className="title">{title}</h2>
            <button
                className="block my-3 border py-1 px-3 rounded-sm cursor-pointer hover:bg-cyan-600 mx-auto"
                onClick={handleScroll}
            >
                Scroll To Section 3
            </button>
            {divs.map((item, index) => (
                <div
                    key={index}
                    className={`h-96 py-6 text-xl font-bold text-center m-3 ${item.color}`}
                    ref={index === 2 ? ref : null}
                >
                    {item.label}
                </div>
            ))}
        </section>
    );
}
