const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
},{versionKey:false});

const Model = mongoose.model('Test', blogSchema);

module.exports = Model