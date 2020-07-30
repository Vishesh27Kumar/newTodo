import React from "react";

function todoList({ list }) {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          <p
            style={{
              textDecoration: item.isCompleted ? "line-through" : "none",
            }}
          >
            {item.task}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default todoList;
