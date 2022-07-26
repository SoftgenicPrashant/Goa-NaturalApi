const express =require('express');
const route=express.Router();
//const controller=require('../controller/controller');
const path = require('path');
const bodyparser=require('body-parser');
var fs= require('fs');
const { authJwt } = require("../middleware");

const { protect } = require('../middleware/middile')
const clientController=require('../controller/addclientController');





//client
route.post('/api/addProduct',clientController.upload.single('image'),clientController.addClient);
route.get('/api/allProduct',clientController.findAllclient);

                                route.put('/api/updateProduct/:id',clientController.upload.single('image'),clientController.editClient);
                                route.delete('/api/deleteclient/:id',clientController.deleteclient);



                                //invoice
                                                  

route.use(bodyparser.urlencoded({extended:true}))



//





     module.exports = route