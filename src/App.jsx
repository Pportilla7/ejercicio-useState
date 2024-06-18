import './App.css'

import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('Sofía');
  const [newName, setNewName] = useState('');

  const handleNameClick = (clickedName) => {
    setName(clickedName);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      setName(newName);
      setNewName('');
    }
  };

  return (
    <div>
      <h2>Teacher Name: {name}</h2>
      <ul>
        <li onClick={() => handleNameClick('Data')}>Data</li>
        <li onClick={() => handleNameClick('Reyes')}>Reyes</li>
        <li onClick={() => handleNameClick('Yolanda')}>Yolanda</li>
      </ul>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="add a name"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;

