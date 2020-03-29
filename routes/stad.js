const router = require('express').Router();
 const { Stad } = require('../models/index.js')
const StadController = require('../controllers/StadController.js')

// get
router.get('/',StadController.getAll )

// post
router.post('/', StadController.postAll)

module.exports=router;