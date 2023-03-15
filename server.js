const express = require ('express')
const app = express()
const port = 4002
const connectdb = require('./config/connectdb')
const contactroute = require('./route/contactroute')


app.listen(port,err=>{
    err?console.log(err):console.log('go port 4002')

})