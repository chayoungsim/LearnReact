import React from 'react'
import ReviewItem from './ReviewItem'

const Reviews = ({review}) => {

    console.log(review)
  return (
    <div className='reviews'>
        <h2 className='hty2'>Reviews</h2>
        <div className='review-boxs'>
            {
                review.results.map((result,idx) => (
                    <ReviewItem key={idx} review={result}  />
                ))
            }            
        </div>        
    </div>
  )
}

export default Reviews  