const express = require('express');
const app = express();
const PORT = 3000; 
const cors = require('cors');

const stadRouter = require('./routes/stad');
const taskRouter = require('./routes/task');
const userRouter = require('./routes/user.js');
const categoryRouter = require('./routes/category.js');


app.use(cors());
app.use(express.json()); //bodyparser



app.use('/stad',stadRouter)
app.use('/task',taskRouter)
app.use('/user',userRouter)
app.use('/category',categoryRouter)




app.listen(PORT, ()=>console.log(`server running on port ${PORT} `));