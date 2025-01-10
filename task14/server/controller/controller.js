const Model = require("../models/model")

const getAllData = async (req, res) => {
    try {
        const products = await Model.find()

        res.status(200).json({ data: products, message: "sucsessful" })
    } catch (error) {
        res.status(500).send({ message: error.message })

    }
}

const getDataId = async (req, res) => {
    const {id} = req.params
    try {
        const productsId = await Model.findById(id)
        res.status(200).json({data:productsId, message:"succesful"})
    } catch (error) {
        res.status(500).send({message:error.message})
    }
}

const deleteData = async (req, res) => {
    try {
        const {id} = req.params
        const deleteProducts = await Model.findByIdAndDelete(id)

        res.status(202).json({deleteProducts, message:"succsesful   "})
    } catch (error) {
        res.status(500).send({ message: error.message })

    }
}

const postData = async (req, res) => {
    try {
        const newProduct = Model({...req.body})
        await newProduct.save()
        res.status(201).json({data: newProduct})
    } catch (error) {
        res.status(500).send({message: error.message})
        
    }
}


const editData = async (req, res) => {
    const {id} = req.params
    console.log(id);
    
    try {
        const updatedData = await Model.findByIdAndUpdate(id, {
            ...req.body
        },
        {
            new:true,
        })
        
        res.status(200).json({updatedData: updatedData, message:"succesful"})

    } catch (error) {
        res.status(500).send({message:error.message})
    }
}
module.exports = {
    getAllData,
    getDataId,
    deleteData,
    postData,
    editData
  };