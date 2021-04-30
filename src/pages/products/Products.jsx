import React from 'react';
import { useSelector } from 'react-redux';
import LargeCardContainer from '../../components/largeCardContainer/LargeCardContainer';
import SmallCardContainer from '../../components/smallCardContainer/SmallCardContainer';
import styles from './products.module.scss';

const Product = () => {
  const largeCardSections = useSelector(state => state.productsPage.products.largeCardSections);
  const smallCardSections = useSelector(state => state.productsPage.products.smallCardSections);

  return (
    <div className={styles.productsContainer}>
      <div>
        {largeCardSections.slice(0, 1).map(section => (
          <LargeCardContainer key={section.id} section={section}/>
        ))}
      </div>
      <div>
        {smallCardSections.map(section => (
          <SmallCardContainer key={section.id} section={section}/>
        ))}
      </div>
    </div>
  )
}

export default Product;