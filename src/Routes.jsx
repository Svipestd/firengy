import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Welcome from './pages/welcome/Welcome';
import Products from './pages/products/Products';
import MyItems from './pages/myItems/MyItems';
import ProductCard from './pages/productCard/ProductCard';

const Routes = () => {
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