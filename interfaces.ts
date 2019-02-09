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

interface Todo {
  title: string;
  text: string;
}

function showTodo(todo: Todo) {
  console.log(todo.title + " : " + todo.text);
}

let myTodo = { title: "Trash", text: "Take out the rubbish" };

showTodo(myTodo);
