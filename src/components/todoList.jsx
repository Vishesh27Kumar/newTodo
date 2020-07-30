import React from "react";

function todoList({ list, onDeleteRequest, onCheckboxStatusChange }) {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          <input
            type="checkbox"
            onChange={() => onCheckboxStatusChange(index)}
            defaultChecked={item.isCompleted}
          />
          <p
            style={{
              textDecoration: item.isCompleted ? "line-through" : "none",
            }}
          >
            {item.task}
          </p>
          <button onClick={() => onDeleteRequest(index)}>DEL</button>{" "}
        </li>
      ))}
    </ul>
  );
}

export default todoList;
