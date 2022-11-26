import React from 'react'
import './Modal.css'
// import MovieDetails from './movieDetails'

function Modal(props) {
  const handleClick = (e) => {
    e.stopPropagation()
    props.onClose()
  }
  return (
    <div className='modal' onClick={handleClick}>
      <button className='close' >X</button>
      {props.children}
    </div>
  );
}

export default Modal;