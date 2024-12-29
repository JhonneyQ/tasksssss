import React, { useState, useEffect, useContext } from 'react';
import { BasketContext } from '../../../context/index2';



const Basket = () => {

    const { basket, removeBasketItem, increaseBasketCount, decreaseBasketCount, clearBasket, calculateTotalPrice } = useContext(BasketContext)

    console.log(basket);
    return (
        <div className='container'>
            <h2>{calculateTotalPrice()}</h2>

            {/* <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {basket && basket.map((p) => (
                        <tr className='card' key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.title}</td>
                            <td>{p.description}</td>
                            <td><button onClick={removeBasketItem(p)}>remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table> */}



            <div className='cards'>
                {basket && basket.map((p) => (
                    <div className='card' key={p.id}>
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        <button onClick={()=>removeBasketItem(p)}>remove</button>
                        <button onClick={()=>increaseBasketCount(p)}>+</button>
                        <p>{p.quantity}</p>
                        <button onClick={()=>decreaseBasketCount(p)}>-</button>
                        <p>{p.price*p.quantity}</p>
                    </div>
                ))}
            </div>



        </div>
    );
};

export default Basket;
