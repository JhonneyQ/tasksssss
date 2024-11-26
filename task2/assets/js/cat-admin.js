BASE_URL = "http://localhost:3000"
const endpoints = {
    users: "users",
    products: "products",
    categories: "categories"
};

const add = document.querySelector(".add")

const a = document.querySelector(".inpname")
const b = document.querySelector(".inppar")

const d = document.querySelector(".editName")
const e = document.querySelector(".editPar")

add.addEventListener("click" ,async function addd(){
    axios.post(`${BASE_URL}/${endpoints.categories}`, {
        name:  a.value.trim(),
        id: b.value.trim(),
        
      })
      getAllData()
      

})



async function getAllData() {  
    const res = await axios(`${BASE_URL}/${endpoints.categories}`);
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
                <p class="par">${element.id}</p>
            </div>
                <div>
                    <button class = "delete">delete</button>
                    <button class = "edit call">edit</button>
                </div>
        `;

        cards.appendChild(card);

        const deleteButton = card.querySelector(".delete");
        const editButton = card.querySelector(".edit");





        async function deletedata(id){
            const res = await axios.delete(`${BASE_URL}/${endpoints.categories}/${id}`)          
        }


            editButton.addEventListener("click", ()=>{
                axios.patch(`${BASE_URL}/${endpoints.categories}/${element.id}`, {
                    name:  d.value.trim(),
                    id: e.value.trim(),
                  })
                
            })
        


        deleteButton.addEventListener("click", ()=>{
            deletedata(element.id)
            const closest = deleteButton.closest(".card")
            closest.remove()
        })

        
    });
    
}


getAllData()