const express = require('express')
const contactRoute= express.Router() 
ContactSchema = require('../module/contactmodule') 
const {getcontact,addcontact,updatedcontact,deleteContact} = require('../controller/contact')




contactRoute.get('/',getcontact )

contactRoute.post('/addcontact',addcontact )




  contactRoute.delete('/:id',deleteContact) 

  

     
contactRoute.put('/:id', updatedcontact ) 
    


module.exports=contactRoute