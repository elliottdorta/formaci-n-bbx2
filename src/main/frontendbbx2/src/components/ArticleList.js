import React, { Fragment,useState,useEffect } from 'react';

import{ButtonGroup, Button,Card, Table} from 'react-bootstrap';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faList,faTrash,faEdit} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';



export default function ArticleList() {

    const [list, setList] = useState([]);
    useEffect(() => {
      axios({
        url: "http://localhost:8080/api/articles/",
      })
        .then((response) => {
          setList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [setList]);

    return (
        <Fragment>
       <Card className={"border border-dark text-center text-black"}>
           <Card.Header><FontAwesomeIcon icon={faList}/> Lista de Articulos </Card.Header>
           <Card.Body>
               <Table bordered hover striped variant="light">
                   <thead>
                       <tr>
                           <th>Código de artículo</th>
                           <th>Descripción</th>
                           <th>Estado</th>
                           <th>Precio</th>
                           <th>Fecha de Creación</th>
                           <th>Creador</th>
                           <th>Acciones</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                        list.length === 0 ?
                        <tr align="center">
                           <td colSpan="6">Articulos disponibles</td>
                        </tr> :
                        list.map((item)=> (
                           
                            <tr key={item.id}>
                                <td>{item.idarticle}</td>
                                <td>{item.description}</td>
                                <td>{item.status}</td>
                                <td>{item.price}</td>
                                <td>{item.dateup}</td>
                                <td>{item.creator}</td>
                                <td>
                                    <ButtonGroup>
                                        <Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faEdit}/></Button>
                                        <Button size="sm" variant="outline-danger"><FontAwesomeIcon icon={faTrash}/></Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                           
                         ))
                       }
                   </tbody>
               </Table>
           </Card.Body>
       </Card>
       </Fragment> 
  );
}