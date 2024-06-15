import React, { useEffect, useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ task, removeTask, toggleTask }) => {
  const [category, setCategory] = useState("urgent");

  useEffect(() => {
    if (task.text.tags.toLowerCase() === "urgent") setCategory("urgent");
    else if (task.text.tags.toLowerCase() === "moderate") setCategory("moderate");
    else setCategory("normal");

    if(task.completed) setCategory("completed");
  }, [task.text.tags]);

  return (
    <li className="todo-item">
      <div className={`note-wrapper ${category}`}>
        <div className="notes-heading">
          <h3>{task.text.text}</h3>
          <span className="category-badge">{`${task.completed?"Completed":`${task.text.tags}`}`}</span>
        </div>
        <div className="notes-body">
          <div className="date-time">
            <div className="date">{task.text.deadlineDate}</div>
            <div className="time">{task.text.deadlineTime}</div>
          </div>
          <div className="actions">
            <button className="btn complete-btn" onClick={() => toggleTask(task.text.key)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button className="btn remove-btn" onClick={() => removeTask(task.text.key)}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;