import data from "./data/projects";

export default function Selector(props) {
    const options = data.map((x) => (
        <option key={x.id} value={x.id}>
            {x.id}. {x.name}
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
                    <option value="" disabled>
                        - - Select a Project - -
                    </option>
                    {options}
                </select>
            </div>
        </section>
    );
}
