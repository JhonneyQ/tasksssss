const BASE_URL = "http://localhost:3000"

const add = document.querySelector(".add")

const endpoints = {
    users: "users",
    products: "products",
    categories: "categories"
};

const a = document.querySelector(".inpname")
const b = document.querySelector(".inppar")
const c = document.querySelector(".inpprice")

const d = document.querySelector(".editName")
const e = document.querySelector(".editPar")
const f = document.querySelector(".editPrice")


add.addEventListener("click" ,async function addd(){
    axios.post(`${BASE_URL}/${endpoints.products}`, {
        name:  a.value.trim(),
        description: b.value.trim(),
        price: c.value.trim(),
        
      })

})





async function getAllData() {  
    const res = await axios(`${BASE_URL}/${endpoints.products}`);
    drawcards(res.data);

 
    
}

const cards = document.querySelector(".cards");



function drawcards(arr) {
    cards.innerHTML = ""; 
    arr.forEach(element => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div>
                <h2 class="name">${element.name}</h2>
                <p class="par">${element.description}</p>
                <span class="price">${element.price}</span>
            </div>
                <div>
                    <button class = "delete">delete</button>
                    <button class = "edit">edit</button>
                </div>
        `;

        cards.appendChild(card);

        const deleteButton = card.querySelector(".delete");
        const editButton = card.querySelector(".edit");





        async function deletedata(id){
            const res = await axios.delete(`${BASE_URL}/${endpoints.products}/${id}`)          
        }


            editButton.addEventListener("click", ()=>{
                axios.patch(`${BASE_URL}/${endpoints.products}/${element.id}`, {
                    name:  d.value.trim(),
                    description: e.value.trim(),
                    price: f.value.trim(),
                  })
            })
        


        deleteButton.addEventListener("click", ()=>{
            deletedata(element.id)
        })

        
    });
}

getAllData()
