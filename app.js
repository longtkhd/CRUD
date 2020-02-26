const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
require ('./config/database');
const Task = require('./models/task.model.js');
const User = require('./models/user.model');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/',(req,res) => {
  res.send('hello');
})

// app.post('/task',(req,res)=> {
//   const task = new Task(req.body);
//   task.save().then(() => {
//     res.status(201).send(task);

//   }).catch((err) => {
//     res.status(400).send(err);
//   })

// })

app.post('/task', async (req,res) => {
  const task = new Task(req.body);
  console.log(req.body);
  try{
    await task.save();
    res.status(201).send(task); 
  }catch(e){
    res.status(400).send(e);

  }
})

app.post('/user', async (req,res)  => {
  const user = new User(req.body);
  
  try{
    await user.save();
    res.status(201).send(user);

  }catch(e){
    res.status(400).send(e);

  }
})



app.listen(port,() => {
  console.log('sever is running on port ' + port);
})