import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ReviewContainer from '../../components/reviewContainer/ReviewContainer.jsx'
import { productsActions } from '../../store/productsReducer.js';
import styles from './productCard.module.scss';

const ProductCard = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const productId = params.id;
  const product = useSelector(state => state.productsPage.products.productsList).find(item => item.id == productId);
  const userProductsList = useSelector(state => state.productsPage.userProductsList);

  const addProduct = (product) => {
    if (!userProductsList.find(productItem => productItem.id == product.id)) {
      userProductsList.push(product);
      dispatch(productsActions.addProduct(userProductsList));
    }
  }

  return (
    <div >
      <div className={styles.productHead}>
        <div className={styles.productImg}>
          <img src={`../../build/assets/images/${product.image}`} alt="" />
        </div>

        <div className={styles.productInfo}>
          <div className={styles.productTitle}>{product.title}</div>
          <div className={styles.productSnippet}>{product.snippet}</div>
          <div className={styles.productBtn}>
            <button className={styles.btn} onClick={() => addProduct(product)}>Rent</button>
          </div>
        </div>
      </div>

      <div className={styles.productAspects}>
        <h3 className={styles.aspectsTitle}>Super Effective</h3>
        <p className={styles.aspectsDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error debitis nostrum nam!</p>
        <h3 className={styles.aspectsTitle}>Clean, Tidy</h3>
        <p className={styles.aspectsDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error debitis nostrum nam explicabo ex!</p>
        <h3 className={styles.aspectsTitle}>Cancel Anytime</h3>
        <p className={styles.aspectsDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <h3 className={styles.aspectsTitle}>Satisfaction Guaranted</h3>
        <p className={styles.aspectsDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error debitis nostrum nam explicabo ex!</p>
      </div>

      <div className={styles.productDescription}>
        {product.description}
      </div>


      <ReviewContainer />
    </div>
  )
}

export default ProductCard;