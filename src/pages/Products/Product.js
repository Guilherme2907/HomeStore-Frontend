import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { ProductWrapper } from "./styled";
import image from "../../assets/product-1.png";
import { ProductConsumer } from "../../store/ProductContext";

export default function Sidebar({ product }) {
  return (
    <Col xs={12} sm={6} lg={4}>
      <ProductWrapper>
        <ProductConsumer>
          {value => {
            return (
              <div className="product-grid">
                <div className="product-image-container">
                  <Link to="/details" className="link-image">
                    <img
                      src={image}
                      alt="product"
                      className="product-image"
                      onClick={() => value.handleDetails(product)}
                    />
                  </Link>

                  <Link
                    to="/cart"
                    className="add-cart"
                    onClick={() => value.addProductToCart(product)}
                  >
                    <i className="fas fa-cart-plus" />
                  </Link>
                </div>
                <div className="product-content">
                  <h5>{product.nome}</h5>
                  <p>{`R$ ${product.preco}`}</p>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </ProductWrapper>
    </Col>
  );
}
