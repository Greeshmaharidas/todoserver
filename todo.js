function addTodo(todo){
    console.log(todo);
}
//function addTodo(todo){
    //const todos = [
       let todos = [
        {id:1, name:"todo1" ,description:"todo1 desc"},
        {id:2,name:"todo2" ,description:"todo2 desc"},
    ]
    //return todos;
        

function addTodo(){
    todos.push({name:"todo1",description:"todo1 desc"});
    return todos;
}
function getTodo(){
    return todos;
}
function deleteTodo(id){
    todos=todos.filter(function(todo){
         return todo.id!=id;


    });
    return todos;
}

var name="todo";
exports.addTodo =addTodo;
exports.getTodo =getTodo;
exports.name =name;
exports.deleteTodo=deleteTodo;