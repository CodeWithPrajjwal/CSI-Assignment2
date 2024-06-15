import './TodoForm.css';
import React, {useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({setOpenForm, addTask }) => {
  const [text, setTaskText] = useState('');
  const [deadlineDate, setDeadlineDate] = useState('');
  const [deadlineTime, setDeadlineTime] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      const key = uuidv4();
      addTask({ text, deadlineDate, deadlineTime, tags, key});
      setTaskText('');
      setDeadlineDate('');
      setDeadlineTime('');
      setTags('');
    }
    setOpenForm(false);
  };

  return (
    <div className='todo-form'>
    <div className='background-wrapper'></div>
    <form className="task-form" onSubmit={handleSubmit}>
      <h1>Add New Task</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Task Name"
        className="task-input"
      />
      <input
        type="date"
        value={deadlineDate}
        onChange={(e) => setDeadlineDate(e.target.value)}
        placeholder="Deadline Date"
        className="task-input"
      />
      <input
        type="time"
        value={deadlineTime}
        onChange={(e) => setDeadlineTime(e.target.value)}
        placeholder="Deadline Time"
        className="task-input"
      />
      <div className='tags'>
      <h3>Tags</h3>
      <label>
  <input
    type="radio"
    name="tags"
    value="Normal"
    checked={tags === "Normal"}
    onChange={(e) => setTags(e.target.value)}
    className=""
  />
  Normal
</label>
<label>
  <input
    type="radio"
    name="tags"
    value="Moderate"
    checked={tags === "Moderate"}
    onChange={(e) => setTags(e.target.value)}
    className=""
  />
  Moderate
</label>
<label>
  <input
    type="radio"
    name="tags"
    value="Urgent"
    checked={tags === "Urgent"}
    onChange={(e) => setTags(e.target.value)}
    className=""
  />
  Urgent
</label>
      </div>
      <button type="submit" className="task-button">Add</button>
    </form>
    </div>
  );
};

export default TodoForm;
