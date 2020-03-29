const router = require('express').Router();
 const { Category } = require('../models/index.js')
const CategoryController = require('../controllers/CategoryController.js')

// get
router.get('/',CategoryController.getAll)

// post
router.post('/', CategoryController.postAll)

module.exports=router;