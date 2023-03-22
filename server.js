const express = require ('express')
const app = express()
const port = 4002
const connectdb = require('./config/connectdb')
const contactRoute = require('./route/contactroute')

connectdb()
app.use(express.json ())
app.use('/contact',contactRoute )
app.listen(port,err=>{
    err?console.log(err):console.log('go port 4002')

})