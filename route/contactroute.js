const express = require('express')
const contactRoute= express.Router() 
contactschema = require('../module/contactmodule')
contactRoute.get('./', async(req,res)=>{
    try{
        const contact = await  contactschema.find()

        res.status(200).json({msg:'voici la liste des utilisateurs',contact}) 

    }catch(err){
        console.log(err)
    }
}
)




module.exports=contactRoute