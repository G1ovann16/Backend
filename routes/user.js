const router = require('express').Router();
 const { User } = require('../models/index.js')
 const UserController = require('../controllers/UserController')

router.get('/', UserController.getAllUser)

// post

router.post('/', UserController.setUser)

module.exports=router;