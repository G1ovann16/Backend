const { Category, Task } = require('../models/index.js');

const CategoryController = {
    getAll(req,res){   
        Category.findAll(
            {include : [Task ]}
            )
        .then(category => res.send(category))
        .catch(err=>{
            console.log(err);
            res.status(500).send({message: "error to load to Category"})
          })
    },
   postAll(req,res){
    let {category, name, description }= req.body;
    Category.create({
        category,
        name,
        description
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

module.exports = CategoryController;
