import React from 'react'

import './addCard.styles.css'

const AddCard = () => {
  return (
    <div className='add-card-container' >
      <h4 className='idx' >01</h4>
      <div className='add-card' >
        <form>
          <label>Title</label>
          <input type='text' placeholder='Enter title...' />
          <label>Make a note</label><br></br>
          <textarea type='text' placeholder='Note...' rows='4'  ></textarea>
          <button className='btn'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default AddCard
