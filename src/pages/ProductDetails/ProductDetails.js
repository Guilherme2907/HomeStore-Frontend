import React from "react";
import Title from "../../Components/Title/Title";
import { Col, Row } from "react-bootstrap";
import { ProductConsumer } from "../../store/ProductContext";
import image from "../../assets/product-1.png";

export default function ProductDetails() {
  return (
    <>
      <Row>
        <Title title="Detalhes do Produto" />
      </Row>
      <ProductConsumer>
        {value => (
          <Row>
            <Col xs={12} md={6}>
              <img src={image} alt="product" style={{width : "100%"}}/>
            </Col>
            <Col xs={12} md={6}>
              <h2>{`Nome: ${value.productDetails.nome}`}</h2>
              <h5>{`Preço: R$ ${value.productDetails.preco}`}</h5>
              <p>
                Lorem ipsum dolor amet offal butcher quinoa sustainable
                gastropub, echo park actually green juice sriracha paleo.
                Brooklyn sriracha semiotics, DIY coloring book mixtape craft
                beer sartorial hella blue bottle. Tote bag wolf authentic
                try-hard put a bird on it mumblecore. Unicorn lumbersexual
                master cleanse blog hella VHS, vaporware sartorial church-key
                cardigan single-origin coffee lo-fi organic asymmetrical.
                Taxidermy semiotics celiac stumptown scenester normcore, ethical
                helvetica photo booth gentrify.
              </p>
            </Col>
          </Row>
        )}
      </ProductConsumer>
    </>
  );
}
