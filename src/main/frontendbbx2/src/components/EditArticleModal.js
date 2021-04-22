import React from 'react'
import {Modal,Button} from 'react-bootstrap';


export default function EditArticleModal(props) {
    
    
    return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Información detalada
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Aquí iria la informaicón detallada</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

