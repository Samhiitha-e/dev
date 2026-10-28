const express= require('express');
const app=express();
const port=3000;
app.use(express.json());

let students=[];
app.get('/students',(req,res) =>{
  res.json(students);
});

app.post('/students',(req,res)=>{
  students.push(req.body);
  res.send('Student added successfully');
});

app.patch('/students/:id',(req,res)=>{
  let s=students.find(s=>s.id==req.params.id);
  if(!s) return res.send('Student not found');
  s.name=req.body.name;
  s.marks=req.body.marks;
  res.send('Student updated successfully');
});

app.delete('/students/:id',(req,res)=>{
  students=students.filter(s=>s.id!=req.params.id);
  res.send('Student deleted successfully');
});

app.listen(3000,()=>{
  console.log('Server is running on port 3000');
  });