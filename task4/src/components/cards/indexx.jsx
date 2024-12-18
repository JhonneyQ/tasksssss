import { useEffect, useState } from "react";
import Card from "./card";
import axios from 'axios';

const Cards = () => {
    const [products, setProducts] = useState([]); // State for products to display
    const [search, setSearch] = useState(""); // State for the search input

    // Fetch products from the API
    const getProducts = async () => {
        try {
            const response = await axios('https://dummyjson.com/recipes');
            setProducts(response.data.recipes || []); // Set products to the recipes array
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    // Filter products based on the search query
    const filteredProducts = products.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase().trim())
    );

    // Fetch products on component mount
    useEffect(() => {
        getProducts();
    }, []); // Empty dependency array ensures the API call runs only once

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a recipe"
                value={search} // Controlled input, binds to the search state
                onChange={(e) => setSearch(e.target.value.trim())} // Update search state on input change
            />
            <Card products={filteredProducts} /> {/* Pass the filtered products to the Card component */}
        </div>
    );
};

export default Cards;
