export default function Modal({ header, body, footer, onClose }) {
    return (
        <div className="text-white text-center fixed top-0 bottom-0 w-full bg-zinc-900 left-0 flex justify-center items-center">
            <div className="w-[85%] rounded-md overflow-hidden reveal relative">
                <div className="bg-lime-600 p-2 relative">
                    <h2 className="font-bold">
                        {header ? header : "Modal Header"}
                    </h2>
                    <span
                        className="text-3xl font-bold px-2 cursor-pointer absolute right-0 top-0 h-8 w-8 border m-2 flex justify-center items-center rounded-md hover:bg-lime-500 duration-300"
                        onClick={onClose}
                    >
                        x
                    </span>
                </div>
                <div className="min-h-32 p-2 bg-lime-800">
                    {body ? body : <h3>Modal Body</h3>}
                </div>
                <div className="bg-lime-600 p-2">
                    <h4 className="font-bold">
                        {footer ? footer : "Modal Footer"}
                    </h4>
                </div>
            </div>
        </div>
    );
}
