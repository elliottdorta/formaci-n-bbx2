import { faSignInAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useState } from 'react';
import {Form,Button} from 'react-bootstrap';

const  LoginForm = () => {
    
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const styleLogin = {
        marginTop: '40px'
    }

   

    return (
        <Fragment>
            <h2>¿Tienes cuenta?</h2>
            <h4>Inicia sesión aquí</h4>
            <Form style={styleLogin}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Dirección de email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Introduzca email"  
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                       No compartas tu correo con nadie!.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Introduzca su contraseña" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                         />
                </Form.Group>
                    <Button  className="mt-2 center" size="sm" variant="outline-success"  type="submit">
                        Iniciar sesión | <FontAwesomeIcon icon={faSignInAlt}/>
                    </Button>
                    
                    <Button  className="mt-2 ml-2 center" size="sm" variant="outline-secondary"  type="submit">
                        Cancelar | <FontAwesomeIcon icon={faTimes}/>
                    </Button>
                </Form>
        </Fragment>
    )
}

export default LoginForm;