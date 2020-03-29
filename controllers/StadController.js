const { Stad, Task } = require('../models/index.js');

const StadController = {
    getAll(req,res){   
        Stad.findAll(
            {include : [Task ]}
        )
        .then(stad => res.send(stad))
        .catch(err=>{
            console.log(err);
            res.status(500).send({message: "error to load to user"})
          })
    },
   postAll(req,res){
    let {name, register, TaskId }= req.body;
    Stad.create({
        name,
        register,
        TaskId
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
erase(req, res){
    let id = req.params.id;
    
    Stad.destroy(
       {where: { id: id }}
    ).then(()=>{
        res.statusCode=201;
        res.json({status: 'ok'})
    })
    .catch(err =>{
        res.statusCode=401;
        res.json( {status: 'ko', message:err})
    });
    }
}
module.exports = StadController;
