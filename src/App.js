import './App.css';

function App() {
  return (
    <div className="app">
      <h2 className='app-title' >To-Do List</h2>
      <div className='note-card-container' >
        <h4>01</h4>
        <form>
          <label>Title</label>
          <input type='text' placeholder='Enter title...' />
          <label>Make a note</label>
          <textarea type='text' placeholder='Note...' ></textarea>
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

export default App;
