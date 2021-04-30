import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productsActions } from '../../store/productsReducer';
import styles from './itemCard.module.scss';

const ItemCard = (props) => {
  const dispatch = useDispatch();
  const product = props.product;
  const productsList = useSelector(state => state.productsPage.userProductsList);

  const removeProduct = (productId) => {
    const newProductsList = productsList.filter(item => item.id != productId);
    dispatch(productsActions.removeProducts(newProductsList));
  }

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemImg}>
        <img src={require(`../../assets/images/${product.image}`)} alt={`product ${product.id}`}/>
      </div>
      <div className={styles.itemInfo}>
        <div className={styles.itemTitle}>{product.title}</div>
        <div className={styles.itemSnippet}>{product.snippet}</div>
      </div>
      <div className={styles.removeBtn}>
        <button className={styles.btn} onClick={() => removeProduct(product.id)}>Delete</button>
      </div>
    </div>
  )
}

export default ItemCard;