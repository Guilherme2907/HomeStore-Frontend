import React from "react";
import { HeaderWrapper } from "./styled";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../store/ProductContext";

export default function Sidebar() {
  return (
    <HeaderWrapper>
      <ProductConsumer>
        {value => {
          return <Link to="/" onClick={() => value.setProducts()}>
            <h1>HOME-STORE</h1>
          </Link>;
        }}
      </ProductConsumer>
    </HeaderWrapper>
  );
}
