import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { FavoritesContext } from '../../../context'
import "./index.scss"



const Favorites = () => {
    

    const { toggleFavorites, favorites } = useContext   (FavoritesContext)
    const [search, setSearch] = useState("")
    const filteredProducts = favorites.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase().trim())
);


    



    return (
        <div className='container'>
            <input
                type="text"
                placeholder="Search for a recipe"
                value={search} // Controlled input, binds to the search state
                onChange={(e) => setSearch(e.target.value)} // Update search state on input change
            />
            <div className='cards'>
                {favorites && filteredProducts.map((p) => (
                    <div className='card' key={p.id}>
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        <button onClick={() => toggleFavorites(p)}>
                            {favorites.find((q) => q.id === p.id) ? <FaHeart/> : <FaRegHeart/>}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Favorites