import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { FavoritesContext } from '../../../context';
import { useContext } from 'react';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import "./index.scss"
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


const Products = () => {
    const [cards, setCards] = useState([])
    const { toggleFavorites, favorites } = useContext(FavoritesContext)
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("All")
    const getAlldata = async () => {
        try {
            const res = await axios("http://localhost:3000/categories")
            setCards(res.data)

            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }





    const filteredProducts = cards.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase().trim())
    );
    const filterCete = filteredProducts.filter((item) => item.category === category || category === "All")

    useEffect(() => {
        getAlldata()
    }, []);

    return (

        <>
            <Helmet>
                <title>Products</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <div className='container'>
                <input
                    type="text"
                    placeholder="Search for a recipe"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select onChange={(e) => setCategory(e.target.value)} >
                    <option value={"All"}>All</option>
                    <option value={"men's clothing"}>men's clothing</option>
                    <option value={"jewelery"}>jewelery</option>
                    <option value={"electronics"}>electronics</option>
                </select>
                <div className='cards'>
                    {cards && filterCete.map((p) => (
                        <div className='card' key={p.id}>
                            <img src={p.image} style={{ width: 300, height: 300 }} />
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                            <button onClick={() => toggleFavorites(p)}>
                                {favorites.find((q) => q.id === p.id) ? <FaHeart /> : <FaRegHeart />}
                            </button>
                            <Link to={`${p.id}`}>{p.title}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Products