import React, { useContext, useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa6";
import axios from 'axios';
import { FaRegHeart } from "react-icons/fa6";
import { FavoritesContext } from '../../context';


const Product = () => {
    const [cards, setCards] = useState([]);
    const { toggleFavorites, favorites } = useContext(FavoritesContext)
    const [search, setSearch] = useState("");

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





    return (
        <div className='container'>
            <div className='cards'>
                {cards && cards.map((p) => (
                    <div key={p.id} className='card'>
                        <h2>{p.name}</h2>
                        <p>{p.description}</p>
                        <button>det</button>
                        <button onClick={() => toggleFavorites(p)}>
                            {favorites.find((q) => q.id === p.id) ? <FaHeart /> : <FaRegHeart />}
                        </button>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product





