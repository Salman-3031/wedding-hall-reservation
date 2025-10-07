import { useState, useEffect } from "react";

export default function DarkLghtToggle() {
    const [darkMode, setDarkMode] = useState(false);

    // Apply dark class to <html>
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-300 dark:bg-gray-700 transition-colors border border-white"
        >
            <span
                className={`inline-block h-6 w-6 transform rounded-full bg-yellow-400 dark:bg-gray-900 dark:border dark:border-gray-600 transition-transform ${darkMode ? "translate-x-8" : "translate-x-1"
                    }`}
            />
        </button>
    );
}
