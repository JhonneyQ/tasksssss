const express = require("express");
const {
    getAllData,
    deleteData,
    postData,
    editData,
    getDataId
} = require("../controller/controller")

const router = express.Router();

router.get("/", getAllData)
router.delete("/:id", deleteData)
router.post("/", postData)
router.put("/:id", editData)
router.get("/:id",getDataId)

module.exports = router