import React from 'react'
import Note from '../Note/note.component'

import './card-list.styles.css'

const CardList = ({note}) => {
  return (
    <div className='card-container' >
      <ul>
        <Note />
      </ul>
    </div>
  )
}

export default CardList
