import React from 'react';
import styles from './reviewCard.module.scss';

const ReviewCard = (props) => {
  const review = props.review;

  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewImg}>
        <img src={review.picture.large} alt="" />
      </div>
      <div className={styles.reviewInfo}>
        <div className={styles.reviewName}>{`${review.name.first} ${review.name.last}`}</div>
        <div className={styles.reviewText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam, doloremque libero ipsa aliquid quasi, repellendus ratione itaque, deserunt dolor assumenda debitis. Earum beatae odit inventore aperiam! Ab, sint consequatur.</div>
      </div>
    </div>
  )
}

export default ReviewCard;