import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./index.scss"
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const [cards, setCards] = useState([]);

    const getAllDaata = async () => {
        try {
            const res = await axios(`https://northwind.vercel.app/api/categories`);
            setCards(res.data)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllDaata()
    }, []);


        const navigate = useNavigate();
        const handleGetDetails = (id) => {
            navigate(`/products/${id}`);
            console.log(id)
          };


    return (
        <div className='container'>
            <div className='cards'> 
                {cards && cards.map((p) => (
                    <div key={p.id} className='card'>
                        <h2>{p.name}</h2>
                        <p>{p.description}</p>
                        <button onClick={handleGetDetails(p.id)}>det</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product





