import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';
import { useCartContext } from '../contex/CartContex';




const NavBar = () => {
    const {cantidadTotal} = useCartContext()
return (
    <>
    <Navbar bg="light" expand="lg">
    
    <Container fluid>
        <Link to='/'>
            Vivero Ecommerce
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
    
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <NavLink to="/categoria/suculenta">Suculentas</NavLink>
            <NavLink to="/categoria/planta de interior">Plantas de interior</NavLink>
            <NavLink to="/categoria/planta de exterior">Plantas de exterior</NavLink>
            <NavLink to="/categoria/Jardineria">Jardineria</NavLink>
            
        </Nav>
        <Link to='/cart'>
        { cantidadTotal () !== 0 && cantidadTotal ()}
            <CartWidget />
        </Link>
        </Navbar.Collapse>
        
    </Container>
    </Navbar>
</>
)
}
export default NavBar