import React, { Fragment, useState } from 'react';
import {Form,Button,Col} from 'react-bootstrap';



const RegisterForm = ({dispatchRegisterAction}) => {
    
    
    const [email,setEmail] = useState('');
    const [dni,setDni] = useState('');
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [password,setPassword] = useState('');
    const styleLogin = {
        marginTop: '40px'
    }


    
    return (
        <Fragment>
            <h2>¿Eres nuevo?</h2>
            <h4>Crea una cuenta aquí</h4>
            <Form  style={styleLogin}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Dirección de correo</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Introduzca correo" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Introduzca contraseña" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Juan..."
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSurname">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Rodriguez..." 
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Col sm={5}>
                        <Form.Group  className="pl-0" as={Col} controlId="formGridDni">
                            <Form.Label>Dni</Form.Label>
                            <Form.Control 
                            type="text"
                            placeholder="54001224A"
                            value={dni}
                            onChange={(e)=> setDni(e.target.value)}/>
                        </Form.Group>
                    </Col>
                </Form.Row>
                    <Button className="mt-2 ml-2 center" size="sm" variant="outline-primary" type="submit">
                        Registrarme
                    </Button>
                </Form>           
        </Fragment>
    )
}

export default RegisterForm;