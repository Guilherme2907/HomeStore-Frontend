import React from 'react';

// import { Container } from './styles';
import { Col } from 'react-bootstrap';

export default function Title({title}) {
  return (
    <Col >
        <h2 className='text-center'>{title}</h2>
    </Col>
  );
}
