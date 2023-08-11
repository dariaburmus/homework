import React from "react";
import { useSelector, useDispatch } from "react-redux";

import TodoItem from "./TodoItem";
import NewTodo from "./NewTodo";

import { toggleComplete, createTodo } from "../../store/actions";

import "./TodoList.scss";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleCreateTodo = (newTodo) => {
    dispatch(createTodo(newTodo));
  };

  return (
    <div className="listContainer">
      <h1>Todo List</h1>

      <ul className="list">
        {todos.map((todo) => (
          <TodoItem
            onToggleComplete={handleToggleComplete}
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
