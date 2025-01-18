import { useState } from "react";
import "./accordion.css";
import data from "./data";

export default function Accordion() {
    const [single, setSingle] = useState(null);
    const [multiple, setMultiple] = useState(false);
    const [multipleAccordion, setMultipleAccordion] = useState([]);

    const handleAccordion = (id) => {
        if (multiple) {
            const copy = [...multipleAccordion];
            const index = copy.indexOf(id);
            if (index === -1) {
                copy.push(id);
            } else {
                copy.splice(index, 1);
            }
            setMultipleAccordion(copy);
        } else {
            setSingle(id === single ? null : id);
        }
    };

    const handleClick = () => {
        setMultiple((x) => !x);
    };

    return (
        <section>
            <h2 className="title">Accordion</h2>
            <div className="accordion">
                <button onClick={handleClick}>
                    {multiple ? "Disable" : "Enable"} Multiple View
                </button>
                <div>
                    {data.map((x) => (
                        <div
                            onClick={() => handleAccordion(x.id)}
                            className="accordion-item"
                            key={x.id}
                        >
                            <div className="accordion-question">
                                <p>{x.question}</p>
                                <span>+</span>
                            </div>
                            {multiple ? (
                                multipleAccordion.indexOf(x.id) !== -1 ? (
                                    <div className="accordion-answer">
                                        <p>{x.answer}</p>
                                    </div>
                                ) : null
                            ) : single === x.id ? (
                                <div className="accordion-answer">
                                    <p>{x.answer}</p>
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
