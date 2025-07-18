import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); //evita que se recargue la pagina
        const inputValueTrimmed = inputValue.trim(); //elimina espacios al inicio y al final
        if (inputValueTrimmed.length <= 1) return; //verifica que el input no este vacio
        onNewCategory(inputValueTrimmed);
        setInputValue(''); //limpia el input

    }




    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}

            />

        </form>
    )
}
