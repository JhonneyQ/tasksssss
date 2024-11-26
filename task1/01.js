// import { getAllData } from "./helper.js";

// import BASE_URL, { endpoints } from "./base.js";
const BASE_URL = "http://localhost:3000";

const endpoints = {
  blogs: "blogs"
};

const cards = document.querySelector(".cards")
// let allBlogs = [];
const add = document.querySelector(".add")


// axios(`${BASE_URL}/${endpoints.blogs}`)
//     .then((res)=>{
//       console.log(res);
      
//     })

// async function getAllData() {
//     try {
//       const res = await axios(`${BASE_URL}/${endpoints.blogs}`);
//       allBlogs = res.data; 
//       drawcards(allBlogs); 
//       add
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

async function getAllData(){
    const res = await axios(`${BASE_URL}/${endpoints.blogs}`)
    drawcards(res.data)

}
add.addEventListener("click", async function addd(){
    const a = prompt("id")
    const b = prompt("title")
    const c = prompt("body")
    const d = prompt("author")
    axios.post(`${BASE_URL}/${endpoints.blogs}`, {
        // id: = a
        // : 'Flintstone'
      })
    
})


const search = document.querySelector(".search")


function drawcards(arr){
    arr.forEach(element => {
        const card = document.createElement("div")
        const h2 = document.createElement("h2")
        const title = document.createElement("p")
        const par = document.createElement("p")
        const btns = document.createElement("div")
        const delet = document.createElement("button")
        const edit = document.createElement("button")



        card.className= "card"
        title.className="title"
        par.className="par"
        btns.className="btns"
        delet.className="delete"
        edit.className="edit"

        h2.textContent=element.title
        title.textContent=element.body
        par.textContent=element.author
        delet.textContent="DELETE"
        edit.textContent="EDIT"


        cards.append(card)
        card.append(btns,par,title,h2)
        btns.append(delet,edit)

        async function deletedata(id){
            const res = await axios.delete(`${BASE_URL}/${endpoints.blogs}/${id}`)
            
        }
        

        delet.addEventListener("click", ()=>{
            deletedata(element.id)
        })

    });
}




// add.addEventListener("click", async function addd(){
//     const a = prompt("id")
//     const b = prompt("title")
//     const c = prompt("body")
//     const d = prompt("author")
//     axios.post(`${BASE_URL}/${endpoints.blogs}`)
//     .then((result) => {
//         result.id.value = a
//         result.title.value= b
//         result.body.value = c
//         result.author.value = d
//     })
    
// })


// search.addEventListener("keyup", function (e) {
//     const query = e.target.value.toLowerCase().trim();
//     const filteredBlogs = allBlogs.filter((q) =>
//       q.title.toLowerCase().includes(query) 
//     );
//     drawcards(filteredBlogs); 
//   });

getAllData()    

