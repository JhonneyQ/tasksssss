import { createContext, useState } from 'react'



export const BasketContext = createContext(null)

const BasketProvider = ({ children }) => {

    const [basket, setBasket] = useState([])



    const addToBasket = (product) => {
        setBasket((Baskett) => {
            const idx = Baskett.findIndex((q) => q.id === product.id)

            if (idx === -1) {
                return [...Baskett, { ...product, quantity: 1 }]
            }

            Baskett[idx].quantity++
            return [...Baskett]
        })

        console.log(basket);

    }


    const removeBasketItem = (product) => {
        setBasket((Baskett) => Baskett.filter((q) => q.id !== product.id))
    }
    const increaseBasketCount = (product) => {
        setBasket((Baskett) => {
            const found = Baskett.find((q) => q.id === product.id)
            found.quantity++
            return [...Baskett]
        })
    }
    const decreaseBasketCount = (product) => {
        setBasket((Baskett) => {
            const found = Baskett.find((q) => q.id === product.id)
            found.quantity--
            if (found.quantity === 0) {
                return Baskett.filter((q) => q.id !== product.id)
            }
            return [...Baskett]
        })
    }
    const clearBasket = () => {
        setBasket([])
    }

    const calculateTotalPrice = () => {
        return basket.reduce((sum, curr) => sum + curr.price * curr.quantity, 0).toFixed(2)
    }


    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeBasketItem, increaseBasketCount, decreaseBasketCount, clearBasket, calculateTotalPrice }}>{children}</BasketContext.Provider>
    )
}

export default BasketProvider