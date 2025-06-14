import { useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";

export default function UseOnClickOutside({ title }) {
    const [show, setShow] = useState(false);
    const ref = useRef();
    useOutsideClick(ref, () => {
        setShow(false);
    });

    return (
        <section>
            <h2 className="title">{title}</h2>
            <div className="m-3" ref={ref}>
                {show ? (
                    <div className="p-3 text-center font-bold border rounded-sm space-y-2 bg-cyan-300">
                        <h3>Hello, How are you?</h3>
                        <p>
                            By the way, this is the content section. If you
                            click outside of this content section, it will hide.
                        </p>
                        <p>Come on, Give it a try!!</p>
                    </div>
                ) : (
                    <button
                        className="block mx-auto border rounded-sm px-3 py-1 hover:bg-cyan-600 cursor-pointer"
                        onClick={() => {
                            setShow(true);
                        }}
                    >
                        Show Content
                    </button>
                )}
            </div>
        </section>
    );
}
