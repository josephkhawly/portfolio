import { useEffect, useState, useCallback } from 'react'

export function useLocalStorage(key: string, defaultValue: any) {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof defaultValue === "function") {
            return defaultValue()
        } else {
            return defaultValue
        }
    })

    useEffect(() => {
        if (value === undefined) return localStorage.removeItem(key)
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    const remove = useCallback(() => {
        setValue(undefined)
    }, [])

    return [value, setValue, remove]
}