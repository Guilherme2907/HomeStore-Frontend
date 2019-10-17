import React from "react";
import { Col } from "react-bootstrap";
import { ContentWrapper } from "./styled";

export default function Content(props) {
  return (
    <Col xs={12} md={9}>
      <ContentWrapper>{props.children}</ContentWrapper>
    </Col>
  );
}
