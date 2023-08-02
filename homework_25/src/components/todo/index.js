import React, { useState } from "react";

import TodoItem from "./TodoItem";
import NewTodo from "./NewTodo";

import { randomKey } from "../../utils";

import "./TodoList.scss";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: randomKey(), task: "task 1", completed: false },
    { id: randomKey(), task: "task 2", completed: false },
  ]);

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleCreateTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="listContainer">
      <h1>Todo List</h1>

      <ul className="list">
        {todos.map((todo) => (
          <TodoItem
            onToggleComplete={toggleComplete}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>

      <NewTodo createTodo={handleCreateTodo} />
    </div>
  );
}

export default TodoList;
