import React from "react";

import CheckBox from "../checkBox";
import DeleteButton from "../button";

import "./style.css";

function index({ id, task, onDelete, toggleTodo, isCompleted }) {
  return (
    <li>
      <CheckBox
        id={id}
        isCompleted={isCompleted}
        onChangeHandler={toggleTodo}
      />
      <span className={isCompleted ? "completed" : ""}>{task}</span>
      <DeleteButton id={id} onClickHandler={onDelete} />
    </li>
  );
}

export default index;
