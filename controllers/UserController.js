const { User, Task} = require('../models/index.js');

const UserController = {
    getAll(req,res){   
        User.findAll(
            {include : [Task ]}
        )
        .then(user => res.send(user))
        .catch(err=>{
            console.log(err);
            res.status(500).send({message: "error to load to user"})
          })
    },
   postAll(req,res){
    let {name, lastName, email, password, direction, TaskId }= req.body;
    User.create({
        name,
        lastName,
        email,
        password,
        direction,
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
}
}

module.exports = UserController;
