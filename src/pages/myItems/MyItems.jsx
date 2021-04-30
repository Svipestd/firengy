import React from 'react';
import { useSelector } from 'react-redux';
import ItemCard from '../../components/itemCard/ItemCard.jsx'
import styles from './myItems.module.scss';

const MyItems = () => {
  const productsList = useSelector(state => state.productsPage.userProductsList);

  return (
    <div>
      {productsList.length > 0 
      ? productsList.map(product => (
        <ItemCard key={product.id} product={product} />
      ))
      : <div className={styles.noItemsText}>My items is empty..</div>}
    </div>
  )
}

export default MyItems;