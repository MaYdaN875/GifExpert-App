import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({ category }) => {
    const [images, setimages] = useState([])

    const getImages = async () => {
        const newImages = await getGifs(category)
        setimages(newImages)
    }

    useEffect(() => {
        getImages()
    }, [])


    return (
        <>
            <h3>{category}</h3>
            <p>Hola mundo</p>
            <ol>
                {
                    images.map(({ id, url, title }) => {
                        return (
                            <li key={id}>
                                <img src={url} alt={title} />
                            </li>
                        )
                    })
                }
            </ol>
        </>
    )
}
