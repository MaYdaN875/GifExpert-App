import { useState } from "react"

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState();

    return (
        <input

            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
        />
    )
}
