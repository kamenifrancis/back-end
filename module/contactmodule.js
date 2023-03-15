const mongoose = require('mongoose')

const contactschema = mongoose.Schema({
    LastName:String,
    FisrtName:String,
    Age:Number,
    Numero:Number,
    Email:{
        type:String,
        require:true,
        unique:true,

    }
}

) 
module.exports= mongoose.model('francis',contactschema)