import React from 'react';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
const RatingStars = ({ rating, onClick }) => {
  // Create an array of stars (e.g. [1, 2, 3, 4, 5])
  const stars = [1,2,3,4,5];

  return (
    <div className='px-4'>
      {stars.map(star => (
        <span
          key={star}
          onClick={() => onClick(star)}
          style={{ cursor: 'pointer',margin:'2px' }}
        >
         
          {star <= rating ? <AiFillStar/> : <AiOutlineStar/>}
        </span>
      ))}
    
    </div>
  );
};
export default RatingStars