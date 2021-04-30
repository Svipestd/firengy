import React from 'react';
import { Link } from 'react-router-dom';
import styles from './smallCard.module.scss';

const SmallCard = (props) => {
  const { id, image } = props.card;

  return (
    <Link className={styles.cardBox} to={`/products/${id}`}>
      <img src={`../../build/assets/images/${image}`} alt="" />
    </Link>
  )
}

export default SmallCard;