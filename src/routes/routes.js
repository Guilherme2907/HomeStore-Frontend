import React from "react";
import { Switch, Route } from "react-router-dom";

import ProductList from "../pages/Products/ProductList";
import Cart from "../pages/Cart/Cart";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/categorias" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/details" component={ProductDetails} />
    </Switch>
  );
}
