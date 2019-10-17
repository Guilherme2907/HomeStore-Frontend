import React from "react";
import { Link } from "react-router-dom";

import FormSearch from "../Search/FormSearch";
import { TopbarWrapper } from "./styled";
import { ProductConsumer } from "../../store/ProductContext";

export default function TopBar() {
  return (
    <TopbarWrapper>
      <FormSearch />
      <div className="cart">
        <ProductConsumer>
          {value => (
            <Link to="/cart" className="cart">
              <i className="fas fa-shopping-cart" /> <span>{`Carrinho (${value.cart.length})`}</span>
            </Link>
          )}
        </ProductConsumer>
        <Link to="/cart" className="checkout">
          Check Out
        </Link>
      </div>
    </TopbarWrapper>
  );
}
