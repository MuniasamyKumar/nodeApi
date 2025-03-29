const express = require('express')
const { addAddress } = require('./controller/AddressController')
const AddressRoute = require('./router/Address')
const db = require('./db/db')
const app = express()
app.use(express.json())



app.use('/address',AddressRoute)


app.listen(5000,()=>{
    console.log(`http://localhost:5000`)
})