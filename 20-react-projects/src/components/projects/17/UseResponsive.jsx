import useWindowResize from "./useWindowResize";

export default function UseResponsive({ title }) {
    const windowSize = useWindowResize();
    const { width, height } = windowSize;

    return (
        <section>
            <h2 className="title">{title}</h2>
            <div className="p-3 text-center">
                <h3>Width is {width} px</h3>
                <h3>Height is {height} px</h3>
            </div>
        </section>
    );
}
