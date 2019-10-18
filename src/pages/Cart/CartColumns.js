import React from "react";
import { Row, Col } from "react-bootstrap";

import { CartColumnsWrapper } from "./styled";

export default function CartColumns() {
  return (
    <CartColumnsWrapper>
      <Row className="d-none d-md-flex text-center">
        <Col md={2}>
          <h5>Produto</h5>
        </Col>
        <Col md={2}>
          <h5>Nome do Produto</h5>
        </Col>
        <Col md={2}>
          <h5>Preço</h5>
        </Col>
        <Col md={2}>
          <h5>Quantidade</h5>
        </Col>
        <Col md={2}>
          <h5>Remover</h5>
        </Col>
        <Col md={2}>
          <h5>Total</h5>
        </Col>
      </Row>
    </CartColumnsWrapper>
  );
}
