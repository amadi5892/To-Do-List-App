import AddCard from './components/note-card/addCard.component';

import './App.css';

function App() {
  return (
    <div className="app">
      <h2 className='app-title' >To-Do List</h2>
      <div className='entry-container' >
        <AddCard />
      </div>
    </div>
  );
}

export default App;
