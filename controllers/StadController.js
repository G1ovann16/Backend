const { Stad, Task } = require('../models/index.js');

const StadController = {
    async getAllStad(req, res){
        try {
          const states = await  Stad.findAll({
            // include: [ task ], order: [
            //   ['id', 'ASC'],]
          })
          console.log('¡obtenifo')
          res.status(200).send(states);
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    },
    async  setStat(req,res){
        try {
          const states = await Stad.create({
               name: req.body.name,
               register: req.body.register,
               TaskId: req.body.TaskId
                    })
                    res.status(201).send(states);
        } catch (error) {
            console.log(error)
                res.status(500).send(error)
        }
    },
async erase(req, res){
    try {
        const id = req.params.id;
        const states = await Stad.destroy({
            where:{id:id}
        })
        res.status(200).send('destroy');
        } catch (error) {
            console.log(error)
                res.status(500).send(error)
        }
    }    
    
}
module.exports = StadController;
