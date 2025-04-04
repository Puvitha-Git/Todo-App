import React, { useState } from 'react';
import Todo from "./Todo";
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from './EditTodo';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([
      ...todos, 
      { id: uuidv4(), task: todo, completed: false, isEditing: false }
    ]);
    console.log(todos);
  };

  // Accept an id parameter to toggle the correct todo's completed state
  const toggleCompleted = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const editTodo =id =>
  {
    setTodos(todos.map(todo => todo.id ===id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ?{
      ...todo, task, isEditing: !todo.isEditing
    } : todo))
  }


  return (
    <div className="TodoWrapper">
      <h1>Things To Do!!!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        todo.isEditing ? (
        <EditTodoForm 
        editTodo={editTask}
         task={todo }/>
        ) : (
        <Todo 
          task={todo} 
          key={todo.id} 
          toggleCompleted={toggleCompleted} 
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        /> )
      ))}
    </div>
  );
};

export default TodoWrapper;
