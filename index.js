const express = require('express')
const { addAddress } = require('./controller/AddressController')
const AddressRoute = require('./router/Address')
const db = require('./db/db')
const app = express()
app.use(express.json())
const cors = require("cors");
// app.use(cors());

app.use(cors({
    origin: "*",  // Allow all origins (use specific domains for security)
    methods: ["GET", "POST", "PUT", "DELETE"],
  }));
  


app.use('/address',AddressRoute)


app.listen(5000,()=>{
    console.log(`http://localhost:5000`)
})