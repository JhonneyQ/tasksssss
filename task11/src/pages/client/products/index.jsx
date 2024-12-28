import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { FavoritesContext } from '../../../context';
import { useContext } from 'react';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import "./index.scss"

const Products = () => {
    const [cards, setCards] = useState([])
    const { toggleFavorites, favorites } = useContext(FavoritesContext)
    const [search, setSearch] = useState("")
    const getAlldata = async () => {
        try {
            const res = await axios("http://localhost:3000/categories")
            setCards(res.data)
        } catch (error) {
            console.log(error);
        }
    }


  

    const filteredProducts = cards.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase().trim())
    );

    useEffect(() => {
        getAlldata()
    }, []);

    return (
        <div className='container'>
            <input
                type="text"
                placeholder="Search for a recipe"
                value={search} // Controlled input, binds to the search state
                onChange={(e) => setSearch(e.target.value)} // Update search state on input change
            />
            <div className='cards'>
                {cards && filteredProducts.map((p) => (
                    <div className='card' key={p.id}>
                        <img src= {p.image} style={{width:300, height:300}}/>
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        <button onClick={() => toggleFavorites(p)}>
                            {favorites.find((q) => q.id === p.id) ? <FaHeart /> : <FaRegHeart />}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products