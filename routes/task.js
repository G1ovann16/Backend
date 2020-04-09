const router = require('express').Router();
 const { Task } = require('../models/index.js')
const TaskController = require('../controllers/TaskController.js')

// get
router.get('/',TaskController.getAllTask)

// post
router.post('/', TaskController.setTask)

// delete
router.delete('/:id', TaskController.delete)



module.exports=router;