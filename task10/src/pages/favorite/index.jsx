import React, { useContext, useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FavoritesContext } from '../../context';


const Product = () => {

    const {favorites, toggleFavorites, clearFavorites} = useContext(FavoritesContext)
  



    return (
        <div className='container'>
            <div className='cards'>
                {favorites.map((p) => (
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





