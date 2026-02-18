const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true,
    },
    val:{
        type:String,
        required:true
    }
})

const model = mongoose.model('FastFood',Schema)

module.exports = model