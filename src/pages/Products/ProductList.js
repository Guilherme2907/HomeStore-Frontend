import React from "react";
import { Row } from "react-bootstrap";

import Product from "./Product";
import { ProductConsumer } from "../../store/ProductContext";

export default function ProductList() {
  return (
    <Row>
      <ProductConsumer>
        {value => {
          return value.products.map(product => {
            return <Product key={product.id} product={product}/>
          })
        }}
      </ProductConsumer>
    </Row>
  );
}
