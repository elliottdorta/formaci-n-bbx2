import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import AuthPage from './components/AuthPage';
import AddArticle from './components/Article';
import ListArticle from './components/ArticleList';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import PruebasTabla from './components/PruebasTabla';
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

const App = () => {
  
  const marginApp = {
    marginTop: '20vh'
  }


  return (
      <Router>
      <div>
        <NavBar/>
          <Container style={marginApp}>
            <Switch>
              <Route exact path="/" component={AuthPage} />
              <Route exact path="/welcome" component={Welcome} />
              <Route exact path="/addArticle" component={AddArticle}/>
              <Route exact path="/listArticle" component={ListArticle}/>
              <Route excat path="/edit/:id"component={AddArticle}/>
            </Switch>
          </Container>
      </div>
    </Router>
  );
}

export default (App);
