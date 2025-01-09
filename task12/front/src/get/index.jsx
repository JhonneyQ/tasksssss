import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2"


const Dashboard = () => {
    const [cards, setCards] = useState([]);
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [editt, setEdit] = useState('');


    const deletee = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/data/${id}`);
            getAlldata();
        } catch (error) {
            console.log(error);
        }
    };

    const getAlldata = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/data");
            setCards(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const edit = (id) => {
        const category = cards.find(card => card.id === id);
    
        if (category) {
            Swal.fire({
                html: `
                    <input id="title" value="${category.title}" /> 
                    <input id="description" value="${category.description}" />
                `,
                confirmButtonText: "Save",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const updatedTitle = document.querySelector("#title").value;
                    const updatedDescription = document.querySelector("#description").value;
    
                    try {
                        await axios.patch(`http://localhost:3000/categories/${id}`, {
                            title: updatedTitle,
                            description: updatedDescription
                        });
                        getAlldata(); 
                    } catch (error) {
                        console.log(error);
                    }
                }
            });
        }
    }
    

    const addCategory = async () => {
        if (!description || !title) {
            alert('Please fill in both description and title');
            return;
        }

        try {
            await axios.post("http://localhost:8080/api/data", {
                description: description,
                title: title
            });
            getAlldata(); // 
            setDescription('');
            setTitle('');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAlldata();
    }, []);

    return (
        <div className='container'>
            <div>
                <input
                    type="text"
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={addCategory}>Add</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cards && cards.map((p) => (
                        <tr className='card' key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.description}</td>
                            <td>
                                <button onClick={() => deletee(p.id)}>delete</button>
                                <button onClick={() => edit(p.id)}>edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
