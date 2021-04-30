import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../../store/productsReducer';
import ReviewCard from '../reviewCard/ReviewCard';


const ReviewContainer = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.productsPage.productsReviews);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [])

  return (
    <div>
      {reviews.map(review => (
        <ReviewCard key={review.email} review={review} />
      ))}
    </div>
  )
}

export default ReviewContainer;