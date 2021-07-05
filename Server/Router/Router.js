const controller=require('../Controller/Controller')
const express=require('express');
const router=express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.get('/',controller.getAllData)
router.get('/getSearches/:search',controller.getSearches)
router.post('/details',controller.details)
module.exports=router