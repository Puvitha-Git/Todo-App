import React from 'react';
import { FaPenToSquare,FaTrash } from "react-icons/fa6";

const Todo = ({task,toggleCompleted,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={() => toggleCompleted(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p> 
      <div >
        <FaPenToSquare onClick={() => editTodo(task.id)}/>
        <FaTrash onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  );
}

export default Todo;
