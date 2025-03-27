import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") { // Check to avoid adding empty tasks
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="What is today’s task?"
        className="todo-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">Add task</button>
    </form>
  );
};

export default TodoForm;
