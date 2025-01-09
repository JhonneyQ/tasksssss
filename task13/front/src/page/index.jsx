import React, { useEffect, useState } from 'react'
import axios from "axios"

const Arr = () => {
    const [cards, setCards] = useState([])

    const getAllData = async () => {
        try {
            const res = await axios("http://localhost:8000/api/data")
            setCards(res.data.data)
            console.log(cards);



        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        getAllData()
    }, [])



    return (
        <div className='cards'>
            {cards.map((p) => {
                return (
                    <div className='card' key={p.id}>
                        <h2>{p.title}</h2>
                        <p>{p.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Arr