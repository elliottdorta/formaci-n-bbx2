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
          <Nav classname="mr-auto">
            <Link to={"addArticle"} className="navbar-brand">Article</Link>
            <Link to={"listArticle"} className="navbar-brand">ArticleList</Link>
          </Nav>
        </Navbar>
    </div>
  )
}
