import menus from "../data/treeView";
import TreeViewMenu from "./TreeViewMenu";

export default function TreeView({ title }) {
    return (
        <section>
            <h2 className="title">{title}</h2>
            <div className="px-3 py-6 select-none text-lg">
                <TreeViewMenu menu={menus} />
            </div>
        </section>
    );
}
