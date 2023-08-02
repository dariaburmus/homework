import React, { useState } from "react";

import { randomKey } from "../../utils";

import "./NewTodo.scss";

function NewTodo({ createTodo }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createTodo({ id: randomKey(), task: value, completed: false });
    setValue("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="task">New todo</label>
      <input
        value={value}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="New Todo"
      />

      <button className="addTodoButton">Add Todo</button>
    </form>
  );
}

export default NewTodo;
