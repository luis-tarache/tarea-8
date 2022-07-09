import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavComponent = () => {
  return (
        <>
  <Navbar bg="primary" variant="dark">
    <Container> 
    <Navbar.Brand href="#home">Retro Consultansy</Navbar.Brand>
    <Nav>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#About">About</Nav.Link>
      <Nav.Link href="#Services">Services</Nav.Link>
      <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#Pages">Pages</Nav.Link>
      <Nav.Link href="#Contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    
</>
  )
}

export default NavComponent