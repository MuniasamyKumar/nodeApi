const express = require('express')
const { addAddress, getAddress, deleteAddress, updateAddress } = require('../controller/AddressController')
const route = express.Router()




route.post('/add-address',addAddress)
route.get('/get-address',getAddress)
route.delete('/delete-address',deleteAddress)
route.put('/update-address',updateAddress)



module.exports = route