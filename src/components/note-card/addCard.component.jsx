import React from 'react'

import './addCard.styles.css'

const AddCard = ({setNote, todos, setTodos, note}) => {
  const noteHandler= (e) => {
    setNote(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {text: note, completed: false, id: (Math.random() * 100000) }
    ]);
    setNote('')
  }

  return (
    <div className='add-card-container' >
      <div className='add-card' >
        <form>
          <label>Make a note</label><br></br>
          <textarea type='text' placeholder='Note...' rows='4' onChange={noteHandler} value={note} ></textarea>
          <button type='submit' className='btn' onClick={submitTodoHandler} >Save</button>
        </form>
      </div>
    </div>
  )
}

export default AddCard
