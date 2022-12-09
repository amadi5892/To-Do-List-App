import React from 'react'

import './note.styles.css'

const Note = () => {
  return (
    <div>
      <li className='list-container'>
        <p>Lets Get It Bruddah!</p>
        <button className='accept-btn' >o</button>
        <button className='delete-btn'>x</button>
      </li>
    </div>
  )
}

export default Note
