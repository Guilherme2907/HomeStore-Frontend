import React from "react";
import { Row, Col } from "react-bootstrap";

// import { Container } from './styles';

export default function Cart({ product }) {
  return (
    <Row>
      <Col xs={12} md={6}>
        <Row>
          <Col xs={12} md={6}>
            Image
          </Col>
          <Col xs={12} md={6}>
            <p>{product.nome}</p>
            <button>Remover</button>
          </Col>
        </Row>
      </Col>

      <Col xs={12} md={6}>
        <Row>
          <Col xs={12} md={4}>
            <h5>Preço</h5>
            <p>{`R$ ${product.preco}`}</p>
          </Col>
          <Col xs={12} md={4}>
            <h5>Quantidade</h5>
            <p>{product.quantity}</p>
          </Col>
          <Col xs={12} md={4}>
            <h5>Total</h5>
            <p>{`R$ ${product.total}`}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
