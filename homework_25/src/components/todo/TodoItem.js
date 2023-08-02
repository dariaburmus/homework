import React from "react";

import "./TodoItem.scss";

function TodoItem({ todo, onToggleComplete }) {
  const toggleCompleted = (e) => {
    onToggleComplete(e.target.id);
  };

  return (
    <div className="todoItem">
      <li id={todo.id} className={`task ${todo.completed ? "completed" : ""}`}>
        <label htmlFor={todo.id}>{todo.task}</label>

        <input
          id={todo.id}
          type="checkbox"
          onChange={toggleCompleted}
          checked={todo.completed}
        />
      </li>
    </div>
  );
}

export default TodoItem;
