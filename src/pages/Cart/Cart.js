import React from "react";
import CartItem from "./CartItem";
import { ProductConsumer } from "../../store/ProductContext";

export default function Cart() {
  return (
    <>
      <h1>Cart</h1>
      <ProductConsumer>
        {value => (
          value.cart.map(productCart => {
            return <CartItem key={productCart.id} product={productCart}/>
          })
        )}
      </ProductConsumer>
    </>
  );
}
