const mongoose = require('mongoose')

const connectdb = async ()=>{
    try{ 
     await mongoose.connect('mongodb+srv://blickson57:dIC7uDqvkqJiGAWG@cluster0.cmxtx01.mongodb.net/?retryWrites=true&w=majority') 
        console.log('je suis lié à ma database')
    } catch(err){
console.log(err) 
}

    
} 
module.exports = connectdb