const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose');
const { Schema } = mongoose;



const ProductS = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});
const ProductModel = mongoose.model("Products", ProductS);

app.get("/api/data", async (req, res) => {
  try {
    const products = await ProductModel.find({});
    // console.log(products);
    // res.status.send()
    res.status(200).json({ data: products, message: "success!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ message: "failed to delete! | product not found!" });
    }
    res.status(200).json({
      deletedProduct: deletedProduct,
      message: "deleted successfully!",
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});


mongoose.connect('mongodb+srv://kananqadirov2005:kanan_2005@cluster0.whn9k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() =>app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  }));