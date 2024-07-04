import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const Chores = () => {
  const [chores, setChores] = useState([]);
  const [choreInput, setChoreInput] = useState('');

  const addChore = () => {
    if (!choreInput) return;
    setChores([...chores, { id: chores.length + 1, text: choreInput }]);
    setChoreInput('');
  };

  const deleteChore = id => {
    setChores(chores.filter(chore => chore.id !== id));
  };

  return (
    <div>
      <h2>Chores</h2>
      <div>
        <input
          type="text"
          value={choreInput}
          onChange={e => setChoreInput(e.target.value)}
          placeholder="Enter a new chore"
        />
        <button onClick={addChore}><FaPlus /></button>
      </div>
      <ul>
        {chores.map(chore => (
          <li key={chore.id}>
            <span>{chore.text}</span>
            <button onClick={() => deleteChore(chore.id)}><FaTrash /></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chores;
