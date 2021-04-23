import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function NavBar() {
  return (
    <div>
        <Navbar bg="light" expand="lg">
          <Link to={""} className="navbar-brand">
            <Navbar.Brand href="">Formación BBX2</Navbar.Brand>
          </Link>
          <Nav className="mr-auto">
            <Link to={"welcome"} className="navbar-brand">Home</Link>
            <Link to={"addArticle"} className="navbar-brand">Articulo</Link>
            <Link to={"listArticle"} className="navbar-brand">Lista de articulos</Link>
          </Nav>
        </Navbar>
    </div>
  )
}
