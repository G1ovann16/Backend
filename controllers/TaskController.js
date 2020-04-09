const { Task, Category, User, Stad} = require('../models/index.js');

const TaskController = {
    async getAllTask(req, res){
        try {
          const tasks = await  Task.findAll({
                include: [Category, User, Stad]
        })
          console.log('¡obtenifo')
          res.status(200).send(tasks);
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    },
    async  setTask(req,res){
        try {
          const tasks = await Task.create({
               name: req.body.name,
               description: req.body.description,
               StadId: req.body.StadId,
               CategoryId: req.body.CategoryId,
               UserId: req.body.UserId
                    })
                    res.status(201).send(tasks);
        } catch (error) {
            console.log(error)
                res.status(500).send(error)
        }
    },
  async  delete(req,res){
        try {
            const id = req.params.id;
            const tasks = await Task.destroy({
                where:{id:id}
            })
            res.status(200).send('destroy');
            } catch (error) {
                console.log(error)
                    res.status(500).send(error)
            }
        }  
}

module.exports = TaskController;
