import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function NavBar() {
  return (
    <div>
        <Navbar bg="light" expand="lg">
          <Link to={""} className="navbar-brand">
            <Navbar.Brand href="">Formación BBX2</Navbar.Brand>
          </Link>
          <Nav className="mr-auto">
            <Link to={"addArticle"} className="navbar-brand">Article</Link>
            <Link to={"listArticle"} className="navbar-brand">ArticleList</Link>
          </Nav>
          <Nav className="navbar-right">
            <Link to={"register"} className="nav-link"><FontAwesomeIcon icon={faSignInAlt}/> Register</Link>
            <Link to={"login"} className="nav-link"><FontAwesomeIcon icon={faSignInAlt}/> Login</Link>
          </Nav>
        </Navbar>
    </div>
  )
}
