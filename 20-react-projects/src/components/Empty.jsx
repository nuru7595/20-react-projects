export default function Empty(props) {
    return (
        <section className="text-center font-bold px-2 py-6">
            <h3 className={props.color || null}>{props.msg}</h3>
        </section>
    );
}
