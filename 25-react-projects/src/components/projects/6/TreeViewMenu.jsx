import TreeViewItem from "./TreeViewItem";

export default function TreeViewMenu({ menu = [] }) {
    return menu && menu.length ? <TreeViewItem menu={menu} /> : null;
}
