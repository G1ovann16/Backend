const { Category, Task } = require('../models/index.js');

const CategoryController = {
    async getAllCategory(req, res){
        try {
          const categories = await  Category.findAll({
          })
          console.log('¡obtenifo')
          res.status(200).send(categories);
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    },
    async  setCategory(req,res){
        try {
          const categories = await Category.create({
               name: req.body.name,
               desciption: req.body.desciption,
               TaskId: req.body.TaskId
                    })
                    res.status(201).send(categories);
        } catch (error) {
            console.log(error)
                res.status(500).send(error)
        }
    }
}

module.exports = CategoryController;
