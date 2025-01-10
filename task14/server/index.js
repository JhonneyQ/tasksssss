const express = require('express')
const app = express()
const port = 8000
const routerP = require("./routes/route")
const mongoose = require('mongoose');
const cors = require("cors");



app.use(cors());

app.use(express.json());

app.use("/api/data", routerP)






mongoose.connect('mongodb+srv://kananqadirov2005:kanan_2005@cluster0.whn9k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => app.listen(port, () => {
        console.log(`Example app listening on port my link  http://localhost:${port}`)
    }));