const { Task, Stad} = require('../models/index.js');

const TaskController = {
    getAll(req,res){
        Task.findAll(
            // {include: [Stad]}
            )
          .then(task => res.send(task))
          .catch(err=>{
              console.log(err);
              res.status(500).send({message: "error to load to task"})
            })
    },
    postAll(req,res){
        let {name, description, user }= req.body;
        Task.create({
            name,
            description,
            user
        })
        .then(()=>{
            res.statusCode=201;
            res.json({status: 'ok'})
        })
        .catch(err =>{
            res.statusCode=401;
            res.json( {status: 'ko', message:err})
        })
    },
    delete(req,res){
        let id = req.params.id;
    let body = req.body;
     Task.destroy({where: {id : id}}
    ).then(()=>{
    res.statusCode=201;
    res.json({status: 'ok'})
    })
    .catch(err =>{
    res.statusCode=401;
    res.json( {status: 'ko', message:err})
})
     }
}

module.exports = TaskController;
