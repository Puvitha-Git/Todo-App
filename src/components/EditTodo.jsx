import React, { useState } from 'react';

const EditTodo = ({ editTodo,task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") { // Check to avoid adding empty tasks
      editTodo(value,task.id);
      setValue("");
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Update task?"
        className="todo-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">Update task</button>
    </form>
  );
};

export default EditTodo;
