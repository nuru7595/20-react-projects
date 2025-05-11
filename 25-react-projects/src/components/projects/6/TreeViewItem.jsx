import { BiMinus, BiPlus } from "react-icons/bi";
import TreeViewMenu from "./TreeViewMenu";
import { useState } from "react";

export default function TreeViewItem({ menu = [] }) {
    const [visible, setVisible] = useState({});
    const toggleMenu = (label) => {
        setVisible({ ...visible, [label]: !visible[label] });
    };

    return (
        <ul className="ml-4">
            {menu.map((x) => (
                <li key={x.to}>
                    <div className="flex items-center justify-normal gap-1">
                        <p>{x.label}</p>
                        {x.children && x.children.length ? (
                            <span onClick={() => toggleMenu(x.label)}>
                                {visible[x.label] ? (
                                    <BiMinus
                                        className="cursor-pointer"
                                        size={20}
                                    />
                                ) : (
                                    <BiPlus
                                        className="cursor-pointer"
                                        size={20}
                                    />
                                )}
                            </span>
                        ) : null}
                    </div>
                    {x.children && x.children.length && visible[x.label] ? (
                        <TreeViewMenu menu={x.children} />
                    ) : null}
                </li>
            ))}
        </ul>
    );
}
