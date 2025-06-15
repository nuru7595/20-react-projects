import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function ThemeSwitch({ title }) {
    const [theme, setTheme] = useLocalStorage("Theme", "Light");

    const handleTheme = () => {
        setTheme(theme === "Light" ? "Dark" : "Light");
    };

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "Dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [theme]);

    return (
        <section>
            <h2 className="title">{title}</h2>
            <div className="px-3 h-64 font-bold flex flex-col items-center justify-center gap-12 dark:bg-slate-700 dark:text-cyan-500">
                <h3>Assalamu Alaikum, Try Theme Changer Below.</h3>
                <button
                    onClick={handleTheme}
                    className="border-stone-800 dark:border-cyan-500 border py-2 px-4 rounded-xl"
                >
                    Change Theme
                </button>
            </div>
        </section>
    );
}
