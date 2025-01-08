const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());

const port = 8080;

app.use(express.json());


let data = [
    {
      id: 2,
      description: "Sweet and savory sauces relishes spreads and seasonings",
      name: "Condiments",
    },
    {
      id: 1,
      description: "Soft drinks coffees teas beers and ales",
      name: "Beverages",
    },
    {
      id: 3,
      description: "Desserts candies and sweet breads",
      name: "Confections",
    },
    {
      id: 4,
      description: "Cheeses",
      name: "Dairy Products",
    },
    {
      id: 5,
      description: "Breads crackers pasta and cereal",
      name: "Grains/Cereals",
    },
    {
      id: 6,
      description: "Prepared meats",
      name: "Meat/Poultry",
    },
    {
      id: 7,
      description: "Dried fruit and bean curd",
      name: "Produce",
    },
    {
      id: 8,
      description: "Seaweed and fish",
      name: "Seafood",
    },
  ];



  app.get("/api/data", (req, res) => {
    if (data.length > 0) {
      res.status(200).send({
        data: data,
        message: "success",
        error: null,
      });
    } else {
      res.status(204).send({
        data: [],
        message: "data is empty!",
      });
    }
  });


  app.delete("/api/data/:id", (req, res) => {
    const { id } = req.params;
  
    const idx = data.findIndex((p) => p.id === +id);
  
    if (idx === -1) {
      res.status(404).send({
        message: "no such product to delete!",
      });
    } else {
      const deleted = data.splice(idx, 1);
      res.status(200).send({
        deletedProduct: deleted,
        data: data,
        message: "succesfully deleted!",
      });
    }
  });

  app.post("/api/data", (req, res) => {
    const { name,  description } = req.body;
  
    const newProduct = {
      id: uuidv4(),
      name,
      description,
    };
  
    data.push(newProduct);
    res.status(201).send({
      message: "successfully posted product!",
      newProduct,
    });
  });

  app.patch("/api/data/:id", (req, res) => {
    const { id } = req.params;
    const { name, description} = req.body;
  
    const idx = data.findIndex((p) => p.id === +id);
  
    if (idx !== -1) {
      if (description !== undefined) {
        data[idx].description = description;
      }
      if (name !== undefined) {
        data[idx].name = name;
      }
  
      res.status(200).send({
        message: "successfully updated!",
        updatedProduct: data[idx],
        data,
      });
    } else {
      res.status(404).send({ message: "not found" });
    }
  });
  

//  nihad oglan deyil 

  app.listen(port, () => {
    console.log(`Link:  http://localhost:${port}`);
  });