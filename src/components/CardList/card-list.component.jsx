import React from 'react'
import Note from '../Note/note.component'

import './card-list.styles.css'

const CardList = ({note}) => {
  return (
    <div className='card-list-container' >
      <ul>
        <Note />
        <Note />
        <Note />
        <Note />
      </ul>
    </div>
  )
}

export default CardList
