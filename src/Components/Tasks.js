import React, { useState } from 'react';
import { FaPlus, FaTrash, FaEdit, FaSave } from 'react-icons/fa';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const [editText, setEditText] = useState('');

  const addTask = () => {
    if (!taskInput) return;
    setTasks([...tasks, { id: tasks.length + 1, text: taskInput }]);
    setTaskInput('');
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = task => {
    setEditTaskId(task.id);
    setEditText(task.text);
  };

  const saveTask = id => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: editText } : task)));
    setEditTaskId(null);
    setEditText('');
  };

  return (
    <div>
      <h2>Tasks</h2>
      <div>
        <input
          value={taskInput}
          onChange={e => setTaskInput(e.target.value)}
          placeholder="Add a task"
        />
        <button onClick={addTask}><FaPlus /></button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {editTaskId === task.id ? (
              <>
                <input value={editText} onChange={e => setEditText(e.target.value)} />
                <button onClick={() => saveTask(task.id)}><FaSave /></button>
              </>
            ) : (
              <>
                <span>{task.text}</span>
                <button onClick={() => editTask(task)}><FaEdit /></button>
                <button onClick={() => deleteTask(task.id)}><FaTrash /></button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
