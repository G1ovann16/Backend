const { Task, Category} = require('../models/index.js');

const TaskController = {
    getAll(req,res){
        Task.findAll(
            {include: [Category] }
            )
          .then(task => res.send(task))
          .catch(err=>{
              console.log(err);
              res.status(500).send({message: "error to load to task"})
            })
    },
    postAll(req,res){
        let {name, description, CategoryId, UserId, StadId }= req.body;
        Task.create({
            name,
            description,
            CategoryId,
            UserId,
            StadId
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
