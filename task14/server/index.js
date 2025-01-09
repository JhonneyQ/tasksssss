const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose');
const cors = require("cors");
const { Schema } = mongoose;


app.use(cors());

const blogSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

const Model = mongoose.model('Test', blogSchema);

app.get('/api/data', async (req, res) => {
    try {
        const products = await Model.find()

        res.status(200).json({ data: products, message: "sucsessful" })
    } catch (error) {
        res.status(500).send({ message: error.message })

    }
})

app.delete('/api/data/:id', async (req, res) => {
    try {
        const {id} = req.params
        const deleteProducts = await Model.findByIdAndDelete(id)

        res.status(202).json({deleteProducts, message:"succsesful   "})
    } catch (error) {
        res.status(500).send({ message: error.message })

    }
})



mongoose.connect('mongodb+srv://kananqadirov2005:kanan_2005@cluster0.whn9k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => app.listen(port, () => {
        console.log(`Example app listening on port my link  http://localhost:${port}`)
    }));