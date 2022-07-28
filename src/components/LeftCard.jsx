import React from 'react'
import Desktop from './images/image-product-desktop.jpg';
import './LeftCard.css';

const LeftCard = () => {
  return (
    <div className='leftcard'>
        <img className='img' src={Desktop} alt="" />
    </div>
  )
}

export default LeftCard