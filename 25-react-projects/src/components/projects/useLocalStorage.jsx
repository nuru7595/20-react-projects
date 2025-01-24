import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        try {
            return localStorage.getItem(key)
                ? JSON.parse(localStorage.getItem(key))
                : defaultValue;
        } catch (e) {
            console.log(`Error Getting Theme: ${e}`);
            return defaultValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.log(`Error Setting Theme: ${e}`);
        }
    }, [key, value]);

    return [value, setValue];
}
