import TabChild from "./TabChild";

export default function Tabs({ title }) {
    function RandomContent() {
        return <div>Random Content</div>;
    }

    const data = [
        {
            label: "Tab 1",
            content: <div>Content of Tab 1</div>,
        },
        {
            label: "Tab 2",
            content: <div>Content of Tab 2</div>,
        },
        {
            label: "Tab 3",
            content: <RandomContent />,
        },
    ];

    return (
        <section>
            <h2 className="title">{title}</h2>
            <TabChild data={data} />
        </section>
    );
}
