import { useState, useEffect } from 'react';
import TodoForm from '../Todo-Form/TodoForm';
import TodoList from '../Todo-List/TodoList';
import './TodoApp.css'
import AddButton from '../Add-Button/AddButton';

const Todo_App = () => {

    const [tasks, setTasks] = useState([]);
    const [openForm, setOpenForm] = useState(false);

    useEffect(() => {
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      if (storedTasks) setTasks(storedTasks);
    }, []);
  
    const addTask = (text, deadlineDate, deadlineTime, tags, key) => {
      tasks.push({ text: text, completed: false, deadlineDate: deadlineDate, deadlineTime: deadlineTime, tags: tags, key: key});
      localStorage.setItem('tasks', JSON.stringify(tasks));
      setTasks([...tasks]);
    };
  
    const removeTask = (id) => {
      const newTasks = tasks.filter((task) => task.text.key !== id);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      setTasks(newTasks);
    };
    
    const toggleTask = (id) => {
      const newTasks = tasks.map((task) =>
        task.text.key === id ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      setTasks(newTasks);
    };

    const toogleOpenForm = (openForm) => {
      setOpenForm(!openForm)
    }

    return(
    <div className='todo-app'>
      {openForm
      ?
      <TodoForm setOpenForm={setOpenForm} addTask={addTask} />
      :
      <div onClick={()=>toogleOpenForm(openForm)}><AddButton/></div>
      }
        <TodoList tasks={tasks} removeTask={removeTask} toggleTask={toggleTask} />
    </div>
    )
}

export default Todo_App;