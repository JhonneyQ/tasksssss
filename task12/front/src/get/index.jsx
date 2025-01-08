import React, { useState } from 'react'
import axios from "axios"


const Get = () => {

    const [cards, setCards] = useState([])

    const getAllData = async () => {
        try {
            const res = await axios("")
            setCards(res.data)
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <div>

    </div>
  )
}

export default Get