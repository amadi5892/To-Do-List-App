import React from 'react'

import './addCard.styles.css'

const AddCard = () => {
  return (
    <div className='add-card-container' >
      <div className='add-card' >
        <form>
          <label>Make a note</label><br></br>
          <textarea type='text' placeholder='Note...' rows='4'  ></textarea>
          <button className='btn'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default AddCard
