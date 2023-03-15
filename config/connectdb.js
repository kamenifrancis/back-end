const mongoose = require('mongoose')

const connectdb = ()=>{
    try{ 
     await; mongoose.connect('mongodb+srv://blickson57:MKpwcrdSAilo7hrb@cluster0.cmxtx01.mongodb.net/?retryWrites=true&w=majority') 
        console.log('je suis lié à ma database')
    } catch(err){
console.log(err) 
}

    
} 
module.exports = connectdb