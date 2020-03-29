const router = require('express').Router();
 const { Task } = require('../models/index.js')
const TaskController = require('../controllers/TaskController.js')

// get
router.get('/',TaskController.getAll )

// post
router.post('/', TaskController.postAll)

module.exports=router;