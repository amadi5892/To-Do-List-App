import React from 'react'
import Note from '../Note/note.component'

import './card-list.styles.css'

const CardList = ({ todos, setTodos, filteredTodos}) => {
  return (
    <div className='card-list-container' >
      <ul>
        {filteredTodos.map((todo) => (
          <Note text={todo.text} key={todo.id} todos={todos} setTodos={setTodos} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default CardList
