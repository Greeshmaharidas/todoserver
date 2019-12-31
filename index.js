const express = require('express');
const todo = require('./todo');
todo.addTodo("todo");
const app = express();
const port =3000;
/*app.get('/', function (req,res){
    console.log(req.query);
    if(req.query.search=="1"){
     res.send("hello");}
     else{
        res.send("world")

     }
}
)*/
app.get('/',function(req,res){
    const todos = [ 
        {name:"todo1" ,description:"todo1 desc"},
        {name:"todo2" ,description:"todo2 desc"},
        
    ]
    res.send(JSON.stringify(todos));
})

app.get('/',function(req,res){
    const todos =todo.getTodo();
    res.json(todos);

})
app.get('/add',function(req,res){
    const todos =todo.addTodo();
    res.json(todos);
})
app.get('/delete',function(req,res){
    console.log(req.query.id,"id");

    const todos =todo.deleteTodo(req.query.id);
    res.json(todos);
})


    
app.listen(port, function() {
    console.log(`example app listening on port ${port}!`)
}
)