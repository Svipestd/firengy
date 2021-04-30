import React from 'react';
import { Link } from 'react-router-dom';
import styles from './largeCard.module.scss';

const LargeCard = (props) => {
  const { id, title, snippet, image } = props.card;


  return (
    <Link className={styles.cardBox} to={`/products/${id}`}>
      <div className={styles.cardImg}>
        <img src={require(`../../assets/images/${image}`)} alt={`product ${id}`}/>
      </div>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardSnippet}>{snippet}</div>
    </Link>
  )
}

export default LargeCard;