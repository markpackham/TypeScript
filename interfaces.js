/*
Non interface solution

function showTodo(todo: { title: string; text: string }) {
  console.log(todo.title + " : " + todo.text);
}

let myTodo = { title: "Trash", text: "Take out the rubbish" };

showTodo(myTodo);

function showTodo(todo: { title: string; text: string }) {
  console.log(todo.title + " : " + todo.text);
}

let myTodo = { title: "Trash", text: "Take out the rubbish" };

showTodo(myTodo);
*/
function showTodo(todo) {
    console.log(todo.title + " : " + todo.text);
}
var myTodo = { title: "Trash", text: "Take out the rubbish" };
showTodo(myTodo);
