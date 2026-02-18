const mongoose = require('mongoose')

const connect = async(url)=>{
    try{
        await mongoose.connect(url).then(()=>{
            console.log("MDB is connected")
        })
    }catch (error){
        console.log('error message :' + error);
    }
}

module.exports = connect