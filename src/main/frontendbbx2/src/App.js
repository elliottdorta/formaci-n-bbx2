import React, {useState}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm'
import AddArticle from './components/Article';
import ListArticle from './components/ArticleList';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { Button} from 'react-bootstrap';
import Footer from './components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';



const App = () => {
  
  const marginAppStyle = {
    marginTop: '10vh'
  }

  const logoutStyle = {
    marginLeft: '50%',
    marginTop: '20px',
  }

  const footerStyle ={
    marginTop: '20px'
  }

  const adminUser = {
    email:"admin@admin.com",
    password: "admin"
}

  const [user,setUser] = useState({email:"", password:""});

  const Login = details => {
    console.log(details);
    if(details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        email: details.email,
        password: details.password
      })
    }else{
      console.log("Usuario no encontrado");
    }
      
  }

  const Logout = () => {
    setUser({email:"", passowrd:""});
  }



  return (

    <div>    
      <div>
        {(user.email !== "") ? (
                <Router>
                  <NavBar/>
                    <Welcome></Welcome>
                    <Container >
                      <Switch>
                        <Route exact path="/addArticle" component={AddArticle}/>
                        <Route exact path="/listArticle" component={ListArticle}/>
                        <Route excat path="/edit/:id"component={AddArticle}/>
                        <Route excat path="/registerForm" component={RegisterForm}/>
                      </Switch>
                    </Container>
                    <Button  style={logoutStyle} variant="outline-primary" onClick={Logout}>Logout <FontAwesomeIcon icon={faSignOutAlt}/></Button>
                </Router>
                
        ) 
        
          : 
        
        (

            <Container style={marginAppStyle}>
              <LoginForm Login={Login}/>
            </Container>
          
        )}

      </div>
      <Footer style={footerStyle}/>
    </div>

  );
}

export default (App);
