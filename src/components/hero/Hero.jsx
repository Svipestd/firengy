import React from 'react';
import { Link } from 'react-router-dom';
import styles from './hero.module.scss';
import image from '@/assets/svg/fire-extinguisher.svg'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInfo}>
        <h1 className={styles.heroTitle}>Find your Fire Extinguisher</h1>
        <div className={styles.heroDescription}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Iste iusto illum quidem asperiores, cum nisi aperiam eius ipsa sapiente odit!</div>
        <Link className={styles.heroBtn} to="/products">
          <button className={styles.btn}>Start Looking</button>
        </Link>
      </div>

      <div className={styles.heroImg}>
        <img src={image} alt="fire extinguisher" />
      </div>
    </div>
  )
}

export default Hero;