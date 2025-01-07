import React from 'react'
import { useGetAllCategoriesQuery } from '../../redux/services/categoriesApi';


const Products = () => {

    const { data: categories, isLoading} = useGetAllCategoriesQuery();


    return (
        <div>
            {isLoading && <h1>Loading...</h1>}


            {categories &&

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((c) => {
                            return (<tr key={c.id}>
                                <td>{c.id}</td>
                                <td>{c.name}</td>
                                <td>{c.description}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>

            }
        </div>
    )
}

export default Products