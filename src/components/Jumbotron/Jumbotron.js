import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import mainImg from '../../img/mainImg.png';
import logo from '../../img/icons/logo.svg';

export default function MainJumbotron() {
  return (
    <Jumbotron fluid style={{
      backgroundImage: `url(${mainImg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      maxHeight: '30vh',
      marginBottom: '0px'
    }}>
      <Container fluid>
        <Row>
          <Col xs={12} className="text-center">
            <img src={logo} alt="Publik-te logo" className="img-fluid" style={{height:'15vh'}}/>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}