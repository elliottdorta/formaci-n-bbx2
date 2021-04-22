import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Welcome from '../components/Welcome';
import AuthPage from '../components/AuthPage';
import AddArticle from '../components/Article';
import ListArticle from '../components/ArticleList';
import NavBar from '../components/NavBar';
import { Container } from 'react-bootstrap';



export default function AppRouter() {
  
  const marginApp = {
    marginTop: '30px'
  }

  return (
    <>
      <Router>
        <div>
            <NavBar/>
            <Container style={marginApp}>
              <Switch>
                <Route exact path="/" component={AuthPage} />
                <Route exact path="/welcome" component={Welcome} />
                <Route exact path="/addArticle" component={AddArticle}/>
                <Route exact path="/listArticle" component={ListArticle}/>
              </Switch>
            </Container>
        </div>
      </Router>
    </>
  );
}
