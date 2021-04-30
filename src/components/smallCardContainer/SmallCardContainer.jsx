import React from 'react';
import SmallCard from '../smallCard/SmallCard.jsx';
import styles from './smallCardContainer.module.scss';

const SmallCardContainer = (props) => {
  const { id, title, cards } = props.section;
  
  return (
    <div className={styles.containerBox}>
      <div className={styles.containerTitle}>{title}</div>
      <div className={styles.containerCards}>
        {cards.map(card => (
          <SmallCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}

export default SmallCardContainer;