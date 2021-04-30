import React from 'react';
import { useSelector } from 'react-redux';
import LargeCardContainer from '../../components/largeCardContainer/LargeCardContainer';
import Hero from '../../components/hero/Hero';
import SmallCardContainer from '../../components/smallCardContainer/SmallCardContainer';

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