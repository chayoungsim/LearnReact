import React, { useState } from 'react'
import './ReviewItem.scss'

const ReviewItem = ({review}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const isLongReview = review.content.length > maxLength;

  const displayText = isLongReview && !isExpanded 
    ? `${review.content.substring(0, maxLength)}...` 
    : review.content;

  return (
    <div className='review-item'>
        <h3>{review.author} {review.updated_at}</h3>
        <p>{displayText}</p>      
        {isLongReview && (
          <button type="button" onClick={toggleExpand}>{isExpanded ? '접기' : '더보기'}</button>
        )}
    </div>
  )
}

export default ReviewItem