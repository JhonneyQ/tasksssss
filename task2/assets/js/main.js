const BASE_URL = "http://localhost:3000"

const input = document.querySelector(".input")

const endpoints = {
    users: "users",
    products: "products",
    categories: "categories"
};

let arr = null

async function getAllData() {  
    const res = await axios(`${BASE_URL}/${endpoints.products}`);
    drawcards(res.data);
    arr = res.data


    
}

const cards = document.querySelector(".cards");

function drawcards(arr) {
    cards.innerHTML = ""; 
    arr.forEach(element => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${element.image}" alt="${element.name}">
            <h2 class="name">${element.name}</h2>
            <p class="par">${element.description}</p>
            <span class="price">${element.price}</span>
        `;

        cards.appendChild(card);

        
    });
}

input.addEventListener("keyup", function () {
    const filtered = arr.filter((item) => {
        return item.name.toLowerCase().includes(input.value.toLowerCase().trim());
    });
    drawcards(filtered);
  });

getAllData();
874