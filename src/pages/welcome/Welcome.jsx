import React from 'react';
import LargeCardContainer from '../../components/largeCardContainer/LargeCardContainer.jsx';
import { useSelector } from 'react-redux';
import Hero from '../../components/hero/Hero.jsx';
import SmallCardContainer from '../../components/smallCardContainer/SmallCardContainer.jsx';

const Hello = () => {
  const largeCardSections = useSelector(state => state.productsPage.products.largeCardSections);
  const smallCardSections = useSelector(state => state.productsPage.products.smallCardSections);

  return (
    <div>
      <Hero />
      {largeCardSections.map(section => (
        <LargeCardContainer key={section.id} section={section} />
      ))}
      {smallCardSections.map(section => (
        <SmallCardContainer key={section.id} section={section} />
      ))}
    </div>
  )
}

export default Hello;