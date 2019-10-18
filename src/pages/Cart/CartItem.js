import React from "react";
import { Row, Col } from "react-bootstrap";
import image from "../../assets/product-1.png";

import { CartItemWrapper } from "./styled";

export default function Cart({ product }) {
  return (
    <CartItemWrapper>
      <Row className="cart-item-row">
        <Col xs={12} md={2}>
          <img src={image} alt="product" style={{ width: "100%" }} />
        </Col>
        <Col xs={12} md={2}>
          <span className="d-md-none">Nome do Produto</span>
          {product.nome}
        </Col>
        <Col xs={12} md={2}>
          <span className="d-md-none">Preço</span>
          {`R$ ${product.preco}`}
        </Col>
        <Col xs={12} md={2} className="quantity-column">
          <span className="d-md-none">Quantidade</span>
          <div className="counter">
            <span>-</span>
            <span>{product.quantity}</span>
            <span>+</span>
          </div>
        </Col>
        <Col xs={12} md={2}>
          <span className="d-md-none">Remover</span>
          <i className="fas fa-trash"></i>
        </Col>
        <Col xs={12} md={2}>
          <span className="d-md-none">Total</span>
          {`R$ ${product.total}`}
        </Col>
      </Row>
    </CartItemWrapper>
  );
}
