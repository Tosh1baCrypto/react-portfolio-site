import { useState, useEffect } from 'react';

function getStorageValue(key, defaultValue) {
    const saved = localStorage.getItem(key);
    if (saved === null || saved === "undefined") {
        return defaultValue;
    }
    try {
        return JSON.parse(saved);
    } catch (error) {
        console.error("Error parsing JSON (light/dark):", error);
        return defaultValue;
    }
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};