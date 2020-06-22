import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../../style/navbar.css';

export default function NavigationBar() {

  return (
    <>
      <Navbar expand="lg" className="mb-3">
        {/* <Navbar.Brand>
          <NavLink to="/home" exact 
          className="nav-link" 
          style={{ color: 'white', borderBottom: '5px solid white' }}>Home</NavLink>
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact className="nav-link">Promociones</NavLink>
            <NavLink to="/expenses" className="nav-link">¿Qué somos?</NavLink>
            <NavLink to="/reports" className="nav-link">Comercios afiliados</NavLink>
            <NavLink to="/novedades" className="nav-link">Novedades</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}