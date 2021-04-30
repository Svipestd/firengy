import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Welcome from './pages/welcome/Welcome.jsx';
import Products from './pages/products/Products.jsx';
import MyItems from './pages/myItems/MyItems.jsx';
import ProductCard from './pages/productCard/productCard.jsx';

const Routes = () => {
  console.log();
  return (
    <Switch>
      <Route exact path="/products">
        <Products />
      </Route>
      <Route exact path="/products/:id">
        <ProductCard />
      </Route>
      <Route exact path="/myItems">
        <MyItems />
      </Route>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes;