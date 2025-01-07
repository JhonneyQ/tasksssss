import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const Details = () => {
    const { id } = useParams()
    const [cards, setCards] = useState([])

    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    const getAlldata = async () => {
        try {
            const res = await axios(`http://localhost:3000/categories/${id}`)
            setCards(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        getAlldata()

    }, [])



    return (
        <div className='container'>
            <button onClick={back}>back</button>
            
            <div className='card' key={cards.id}>
                <img src={cards.image} style={{ width: 300, height: 300 }} />
                <h3>{cards.title}</h3>
                <p>{cards.description}</p>
            </div>

        </div>

    )
}

export default Details