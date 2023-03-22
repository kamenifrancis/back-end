const contactschemaf = require('../module/contactmodule') 
exports.getcontact=async(req,res)=>{
    try{
        const contact = await  contactschemaf.find()

        res.status(200).json({msg:'voici la liste des utilisateurs',contact}) 

    }catch(err){
        console.log(err)
    }
} 
exports.addcontact = async(req,res)=>{
    try{
        const NewContact = new ContactSchema(req.body)
        await NewContact.save() 
        res.status(200).json({NewContact,msg:"you did it the user is added"})
          }catch(err) {
        res.status(500).json('could not add the contact')
    }    
} 
exports.updatedcontact = async(req,res)=>{
    try{ 
        const {id} = req.params
        const updatedContact = await contactschemaf.findByIdAndUpdate(id,{$set: {...req.body}})
        res.status(200).json({msg:'contact updated', updatedContact})
    }catch(err){
    console.log(err) 
}
}
exports.deleteContact = async(req,res)=>{
    try{
        const {id} = req.params
        const deleteContact = await contactschemaf.findByIdAndDelete(id) 
        res.status(200).json({msg:'you did it, welcome to the club'})
    }catch(err){
        console.log(err) 
    }
    }

