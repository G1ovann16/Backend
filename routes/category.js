const router = require('express').Router();
 const { Category } = require('../models/index.js')
const CategoryController = require('../controllers/CategoryController.js')

// get
router.get('/',CategoryController.getAllCategory)

// post
router.post('/', CategoryController.setCategory)

module.exports=router;