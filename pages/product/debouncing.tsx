import React, { useEffect, useState } from "react";

export default function Debouncing() {

    const [value, setValue] = useState<string>('');

    useEffect(() => {
        const debounceFun = setTimeout(() => {
            console.log(value)
        }, 1000)
        return () => {
            clearTimeout(debounceFun)
        }
    }, [value])

    return (
        <div>
            <h1>Debouncing Concept</h1>
            <input type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
}