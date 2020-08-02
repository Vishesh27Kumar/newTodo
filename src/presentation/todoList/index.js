import React from "react";

import TodoItem from "../todoItem";

import "./style.css";

function index({ todos, onDelete, toggleTodo, status, toggleAllTodos }) {
  const todosLength = todos.length;
  const isAllCompleted =
    todos.filter((todo) => todo["isCompleted"] === true).length === todosLength;
  return (
    <React.Fragment>
      {todosLength ? (
        <input
          className="allCheckBox"
          type="checkbox"
          checked={isAllCompleted}
          onChange={toggleAllTodos}
        />
      ) : null}
      <ul className="list">
        {todos
          .filter((todo) => {
            if (status === "all") return todo;
            if (status === "active") return todo["isCompleted"] === false;
            if (status === "completed") return todo["isCompleted"] === true;
          })
          .map((todo) => {
            return (
              <TodoItem
                isCompleted={todo["isCompleted"]}
                id={todo["_id"]}
                key={todo["_id"]}
                task={todo["task"]}
                onDelete={onDelete}
                toggleTodo={toggleTodo}
              />
            );
          })}
      </ul>
    </React.Fragment>
  );
}

export default index;
