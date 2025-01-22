import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCode({ title }) {
    const [value, setValue] = useState("");
    const [input, setInput] = useState("");

    const handleSubmit = (formData) => {
        setValue(formData.get("text"));
        setInput('');
    };

    return (
        <section>
            <h2 className="title">{title}</h2>
            <div className="px-3 py-6">
                <form action={handleSubmit}>
                    <input
                        className="w-full p-2 rounded-md outline-none border-2 border-stone-800"
                        type="text"
                        name="text"
                        placeholder="Your Text Here"
                        value={input}
                        onChange={(e) => setInput(e.currentTarget.value)}
                    />
                    <button
                        type="submit"
                        className={`w-full text-lg font-bold border-2 border-white rounded-md my-4 py-2 text-white outline-none ${input && input.trim() || "cursor-not-allowed"}`}
                        disabled={input && input.trim() ? false : true}
                        >
                        Generate QR Code
                    </button>
                </form>
                <QRCode
                    className="mx-auto border-4 border-white"
                    size={300}
                    value={value.trim() || "Nuru"}
                />
            </div>
        </section>
    );
}
