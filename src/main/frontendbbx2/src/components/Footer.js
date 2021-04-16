import React from 'react'
import { Container,Navbar,Col } from 'react-bootstrap'

export default function Footer() {
    return (
        <Navbar fixed="bottom" bg="dark" variant="dark">
            <Container>
                <Col lg={12} className="text-center text-muted">
                    <div>Desarrollado por Elliott Dorta</div>
                </Col>
            </Container>
        </Navbar>
    )
}
