export default function Selector(props) {
    const options = props.data.map((x) => (
        <option key={x.id} value={x.id}>
            {x.id}. {x.title}
        </option>
    ));

    return (
        <section>
            <h2 className="title">Selector</h2>
            <div className="selector-parent">
                <select
                    defaultValue={props.project}
                    onChange={(e) => props.func(e)}
                >
                    <option value="">
                        - - Select a Project - -
                    </option>
                    {options}
                </select>
            </div>
        </section>
    );
}
