import data from "./data/details";

export default function Information() {
    return (
        <section className="info">
            <h2 className="title">Information</h2>
            <table className="table-fixed w-full font-bold text-lg">
                <tbody>
                    {data.map((x) => (
                        <tr>
                            <td>{x.title}:</td>
                            <td>
                                {x.link ? (
                                    <a
                                        href={x.link}
                                        title={x.linkTitle}
                                        target="_blank"
                                    >
                                        {x.value}
                                    </a>
                                ) : (
                                    x.value
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
