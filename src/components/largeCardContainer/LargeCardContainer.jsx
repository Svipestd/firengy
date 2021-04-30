import React from 'react';
import LargeCard from '../largeCard/LargeCard.jsx';
import styles from './largeCardContainer.module.scss';

const LargeCardContainer = (props) => {
  const { id, title, snippet, cards } = props.section;
  
  return (
    <div className={styles.containerBox}>
      <div className={styles.containerTitle}>{title}</div>
      <div className={styles.containerSnippet}>{snippet}</div>
      <div className={styles.containerCards}>
        {cards.map(card => (
          <LargeCard key={card.id} card={card} />
        ))}
      </div>

    </div>
  )
}

export default LargeCardContainer;