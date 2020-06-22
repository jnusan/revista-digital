import React from 'react';
import { Card, Col } from 'react-bootstrap';
import '../../style/promotion.css';

export default function Promotion(props) {
  console.log('props', props);
  const { img } = props.promo;
  return (
    <Col md={4} xs={6}>
      <Card className="m-3" >
        <Card.Img variant="top" src={img} className="img-fluid promo-border" />
        {/* <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
    </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body> */}
      </Card>
    </Col>
  )
}