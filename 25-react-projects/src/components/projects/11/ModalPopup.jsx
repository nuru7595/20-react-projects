import { useState } from "react";
import Modal from "./Modal";

export default function ModalPopup({ title }) {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const onClose = () => {
        setShowModal(!showModal);
    };

    return (
        <section>
            <h2 className="title">{title}</h2>
            <button
                onClick={handleClick}
                className="bg-cyan-600 px-6 py-1 rounded-md mx-auto block cursor-pointer my-3 font-bold hover:bg-cyan-400 border border-black"
            >
                Show Modal
            </button>
            {showModal ? (
                <Modal
                    header="Customized Modal Header"
                    body={<h3>Customized Modal Body</h3>}
                    footer="Customized Modal Footer"
                    onClose={onClose}
                />
            ) : null}
        </section>
    );
}
