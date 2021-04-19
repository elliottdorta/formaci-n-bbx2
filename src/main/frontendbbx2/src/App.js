
import React from 'react';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col } from 'react-bootstrap';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import Login from './components/Login';
import Register from './components/Register';



function App() {
  
  const styleHome ={
    marginTop : "20px"
  };
  

  return (
    <Router>
      <NavBar/>
      <Container>
        <Row>
          <Col lg={12} style={styleHome}>
            <Switch>
              <Route path="/" exact component={Welcome}/>
              <Route path="/addArticle" exact component={Article}/>
              <Route path="/listArticle" exact component={ArticleList}/>
              <Route path="/login" exact component={Login}/>
              <Route path="/register" exact component={Register}/>
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
