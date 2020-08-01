function setTodos(todoList) {
  todoList = JSON.stringify(todoList);
  localStorage.setItem("todos", todoList);
}

function getTodos() {
  let todoList = localStorage.getItem("todos");
  return JSON.parse(todoList);
}

module.exports = {
  setTodos,
  getTodos,
};
