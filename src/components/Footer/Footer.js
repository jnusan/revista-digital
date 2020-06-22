import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import facebookLogo from '../../img/icons/facebook.svg';
import instagramLogo from '../../img/icons/instagram.svg';
import whatsAppLogo from '../../img/icons/whatsapp.svg';
import logo from '../../img/icons/logo.svg';
import mainImg from '../../img/mainImg.png';
import '../../style/footer.css';

export default function Footer() {
  return (
    <Container 
    fluid style={{
      backgroundImage: `url(${mainImg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      maxHeight: '30vh'
    }}
    >
      <Row className="pt-5 pb-4">
        <Col xs={3}>
          <img src={logo} className="img-fluid" alt="Publik-te logo" />
        </Col>
        <Col xs={3}>
          <img src={facebookLogo} className="footer-social" alt="Facebook logo" />
          <p className="footer-contact">Publi K-T</p>
        </Col>
        <Col xs={3}>
          <img src={instagramLogo} className="footer-social" alt="Instagram logo" />
          <p className="footer-contact">Publikador</p>
        </Col>
        <Col xs={3}>
          <img src={whatsAppLogo} className="footer-social" alt="WhatsApp logo" />
          <p className="footer-contact">8310-8665</p>
        </Col>
      </Row>
    </Container>
  )
}