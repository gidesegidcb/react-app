const controller=require('../Controller/Controller')
const express=require('express');
const router=express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.get('/',controller.getAllData)
router.get('/getField1/:field1',controller.getField1)
router.get('/getField2/:field2',controller.getCustomer)
router.get('/getField3/:field3',controller.getSensor)
router.post('/details',controller.details)
module.exports=router