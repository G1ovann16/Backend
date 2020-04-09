const { User, Task} = require('../models/index.js');

const UserController = {
        async getAllUser(req, res){
            try {
              const users = await  User.findAll({
              })
              console.log('¡obtenifo')
              res.status(200).send(users);
            } catch (error) {
                console.log(error)
                res.status(500).send(error)
            }
        },
        async  setUser(req,res){
            try {
              const users = await User.create({
                   name: req.body.name,
                   lastname: req.body.lastname,
                   email: req.body.email,
                   password: req.body.password,
                   direction: req.body.direction,
                   TaskId: req.body.TaskId
                        })
                        res.status(201).send(users);
            } catch (error) {
                console.log(error)
                    res.status(500).send(error)
            }
        }
}

module.exports = UserController;
