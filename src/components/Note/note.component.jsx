import React from 'react'

import './note.styles.css'

const Note = ({text, todo, todos, setTodos}) => {
    const deleteTodoHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    }

  return (
    <div>
      <li className='list-container'>
        <p className={`note-text ${todo.completed ? 'completed' : ''}`} >{text}</p>
        <div className='btn-div' >
            <button className='accept-btn' onClick={completeHandler} >o</button>
            <button className='delete-btn' onClick={deleteTodoHandler} >x</button>
        </div>
      </li>
    </div>
  )
}

export default Note
