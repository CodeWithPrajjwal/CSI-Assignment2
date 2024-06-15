import './TodoList.css'
import React, { useEffect, useState } from 'react';
import TodoItem from '../Todo-Item/TodoItem';

const TodoList = ({ tasks, removeTask, toggleTask }) => {

  const [showCompleted, setShowCompleted] = useState(false);
  const [showRemaining, setShowRemaining] = useState(false);

  const urgent = tasks.filter(task => task.text.tags.toLowerCase() === 'urgent');
  const moderate = tasks.filter(task => task.text.tags.toLowerCase() === 'moderate');
  const normal = tasks.filter(task => task.text.tags.toLowerCase() === 'normal');

  const sortedTasks = [...urgent, ...moderate, ...normal];

  const completedTasks = sortedTasks.filter(task => task.completed);
  const remainingTasks = sortedTasks.filter(task => !task.completed);

  useEffect(() => {
    setShowCompleted(completedTasks.length > 0);
  },[completedTasks]);

  useEffect(() => {
    setShowRemaining(remainingTasks.length > 0);
  },[remainingTasks]);
  
  return (
    <div className='ul-container'>
      {(showRemaining)&&<h3 className='list-heading'>Remaining Tasks</h3>}
      <ul className='todo-list'>
        {remainingTasks.map((task) => (
          <TodoItem
            key={task.text.key}
            task={task}
            removeTask={removeTask}
            toggleTask={toggleTask}
          />
        ))}
      </ul>
      {(showCompleted)&&<h3 className='list-heading'>Completed Tasks</h3>}
      <ul className='todo-list'>
        {completedTasks.map((task) => (
          <TodoItem
            key={task.text.key}
            task={task}
            removeTask={removeTask}
            toggleTask={toggleTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;