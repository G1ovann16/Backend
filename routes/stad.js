const router = require('express').Router();
 const { Stad } = require('../models/index.js')
const StadController = require('../controllers/StadController.js')

// get
router.get('/',StadController.getAllStad )

// post
router.post('/', StadController.setStat)

router.delete('/:id', StadController.erase)

module.exports=router;