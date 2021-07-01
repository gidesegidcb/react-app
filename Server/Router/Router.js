const controller=require('../Controller/Controller')
const express=require('express');
const router=express.Router();

router.get('/',controller.getAllData)
router.get('/getField1/:field1',controller.getProcess)
router.get('/getField2/:field2',controller.getCustomer)
router.get('/getField3/:field3',controller.getSensor)
module.exports=router