import React, { useEffect } from 'react';
import Promotion from './Promotion';
import { Container, Row } from 'react-bootstrap';
import data from '../../data/promotion.json';

export default function PromotionList() {
  const showPromotions = () => {
    return data.map((promotion, idx) => {
      return <Promotion promo={promotion} key={idx}></Promotion>
    })
  }
  return (
    <Container>
      <Row>
        {
          showPromotions()
        }
      </Row>
    </Container>
  )
}