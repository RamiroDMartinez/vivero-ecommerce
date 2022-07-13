import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';



const NavBar = ({container}) => {
return (

    <Navbar bg="light" expand="lg">
    <Container fluid>
        <Navbar.Brand href="#">Vivero Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link href="#action1">Suculentas</Nav.Link>
            <Nav.Link href="#action2">Plantas de interior</Nav.Link>
            <Nav.Link href="#action3">Plantas de exterior</Nav.Link>
            <NavDropdown title="Jardineria" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action4">Macetas</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Semillas</NavDropdown.Item>
            <NavDropdown.Item href="#action6">Herramientas</NavDropdown.Item>
            <NavDropdown.Item href="#action7">Tierra</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
        <CartWidget />
    </Container>
    </Navbar>

)
}
export default NavBar