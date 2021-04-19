import { faEnvelope, faLock, faSignInAlt, faUndo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState }from 'react'
import { Button, Card, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap'

export default function Login() {

    const styleButton ={
        marginLeft : "5px",
        marginRight : "-12px"
      };
    
    const styleCardLogin ={
        marginTop: "50%"
    };

    const [data, setDaTa] = useState({  
        email:'',
        password:''

    });
   
    return (
        <Row className="justify-content-md-center">
            <Col xs={5}>
                <Card style={styleCardLogin}>
                    <Card.Header>
                        <FontAwesomeIcon icon={faSignInAlt}/> Login
                    </Card.Header>
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text><FontAwesomeIcon icon={faEnvelope}/></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl required autoComplete="off" type="text" name="email" 
                                        placeholder="Introduzca email"/>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl required autoComplete="off" type="password" name="password" 
                                        placeholder="Introduzca contraseña"/>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                    <Card.Footer className="text-right">
                        <Button size="sm" variant="success" type="submit" ><FontAwesomeIcon icon={faSignInAlt}/> Iniciar sesión</Button>
                        <Button size="sm" variant="info" type="submit" style={styleButton}><FontAwesomeIcon icon={faUndo}/> Reset</Button>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}
