import React, { useState } from 'react'
import AddCard from './components/note-card/addCard.component';
import CardList from './components/CardList/card-list.component'

import './App.css';

function App() {
  const [note, setNote] = useState('');
  const [todos, setTodos] = useState([]);


  return (
    <div className="app">
      <h2 className='app-title' >To-Do List</h2>
      <div className='entry-container' >
        <AddCard
        note={note}
        todos={todos}
        setTodos={setTodos}
        setNote={setNote} />
      </div>
      <CardList note={note} />
    </div>
  );
}

export default App;
