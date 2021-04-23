import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useState,useEffect } from 'react';
import {Form,Button} from 'react-bootstrap';
import { useHistory,Link } from 'react-router-dom';




export default function  LoginForm ({Login},props) {
    const styleLogin = {
        marginTop: '40px'
    }
    




    const [details, setDetails] = useState({email:"",password:""});


    const handleSubmit = e => {
        e.preventDefault();
        Login(details);
    };

    let history = useHistory();

    function handleClick() {
      history.push("/registerForm");
    }

    return (
        <Fragment>
            <h2>¿Tienes cuenta?</h2>
            <h4>Inicia sesión aquí</h4>
            <Form  onSubmit={handleSubmit} style={styleLogin}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Dirección de email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Introduzca email"  
                        value={details.email}
                        onChange={e=>setDetails({...details,email: e.target.value})}
                    />
                    <Form.Text className="text-muted">
                       usuario: admin@admin.com pass:admin.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Introduzca su contraseña" 
                        value={details.password}
                        onChange={e=>setDetails({...details,password: e.target.value})}
                         />
                </Form.Group>
                    <Button  className="mt-2 center" size="sm" variant="outline-success"  type="submit">
                        Iniciar sesión | <FontAwesomeIcon icon={faSignInAlt}/>
                    </Button>
                    
                </Form>
        </Fragment>
    )
}
