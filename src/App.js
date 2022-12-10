import React, { useState, useEffect } from 'react'
import AddCard from './components/note-card/addCard.component';
import CardList from './components/CardList/card-list.component'

import './App.css';

function App() {
  const [note, setNote] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(() => {
    filterHandler();
  }, [todos, status])

  const filterHandler = () => {
    switch(status) {
      case 'Completed':
        return setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case 'Uncompleted':
        return setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        return setFilteredTodos(todos);
        break;
    }
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <div className="app">
      <h2 className='app-title' >To-Do List</h2>
      <select onClick={statusHandler} className='dropdown'>
        <option>All</option>
        <option>Completed</option>
        <option>Uncompleted</option>
      </select>
      <div className='entry-container' >
        <AddCard
        note={note}
        todos={todos}
        setTodos={setTodos}
        setNote={setNote} />
      </div>
      <CardList 
      note={note}
      todos={todos}
      setTodos={setTodos}
      filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
