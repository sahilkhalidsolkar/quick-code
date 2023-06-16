import { useEffect, useState } from "react"

const getLocalStorageData = (key, initialValue) => {
    let savedData = JSON.parse(localStorage.getItem(key))
    if (savedData) return savedData
    return initialValue
}

const useLocalStorage = (key, initialValue) => {
    const [value, setvalue] = useState(getLocalStorageData(key, initialValue))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setvalue]
}

export default useLocalStorage