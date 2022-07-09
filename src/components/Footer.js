import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'


const Footer = () => {
  return (
    <div className='bg-hg'>
        <Container>
  <Row>
    <Col lg={true}>
        <h4>MANAGMENT</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Col>
    <Col lg={true}>
        <h4>PLANNING</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Col>
    <Col lg={true}>
        <h4>MARKETING</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Col>
    <Col lg={true}>
        <h4>REPORT</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Col>
  </Row>
</Container>
    </div>
  )
}

export default Footer