import React from 'react'
import "./Note.css"



function Note({title, content}) {
  return (
    <div className='card-note'>
        <h6 className='card-note-title'>{title}</h6>
        <p className='card-cnote-content'>{content}</p>
    </div>
  )
}
 

export default Note
