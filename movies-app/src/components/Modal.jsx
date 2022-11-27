import React from 'react'
import './Modal.css'

function Modal(props) {
  const handleClick = (e) => {
    props.onClose()
  }
  return (
    <div className='modal' onClick={handleClick}>
      <button className='close'>X</button>
      {props.children}
    </div>
  );
}

export default Modal;