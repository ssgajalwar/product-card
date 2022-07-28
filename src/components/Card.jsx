import React from 'react';
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import "./Card.css";

const Card = () => {
  return (
    <div className='card'>
      <LeftCard/>
      <RightCard/>
    </div>
  )
}

export default Card