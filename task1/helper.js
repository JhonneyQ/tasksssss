// import BASE_URL, { endpoints } from "./base.js";

export async function getAllData(){
    const res = await axios(`${BASE_URL}/${endpoints.blogs}`)
    RTE
    
}

// export function deldata(id){
//     axios.delete(`${BASE_URL}/${endpoints.blogs}/${id}`)
//     .then((res)=>{
//         console.log(res)
//     })
// }

