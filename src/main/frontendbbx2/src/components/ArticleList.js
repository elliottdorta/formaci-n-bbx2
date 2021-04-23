
import React, { Fragment,useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import{ButtonGroup, Button,Card, Table} from 'react-bootstrap';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faList,faTrash,faEdit} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import DetailArticleModal from './DetailArticleModal';


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


    const deleteArticle =  (id) =>  {
        axios.delete("http://localhost:8080/api/articles/"+id)
        .then(()=> {
          var result=  list.filter(e =>e.idarticle !==id);
          setList(result);
          alert('ARTICULO BORRADO');
        })

    }

    const[modalShow,setModalShow] = useState(false);


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
                           
                            <tr key={item.idarticle}>
                                <td>{item.idarticle}</td>
                                <td>{item.description}</td>
                                <td>{item.status}</td>
                                <td>{item.price}</td>
                                <td>{item.dateup}</td>
                                <td>{item.creator}</td>
                                <td>
                                    <ButtonGroup>
                                      <Button 
                                          size="sm" 
                                          onClick={() => setModalShow(true)}
                                          variant="outline-primary"><FontAwesomeIcon icon={faList}/>
                                        </Button>
                                        <DetailArticleModal show={modalShow} onHide={()=> setModalShow(false)}/>
                                        <Link 
                                          to={"edit/"+item.idarticle} 
                                          className="btn btn-sm btn-outline-warning"><FontAwesomeIcon icon={faEdit}/>
                                        </Link>{''}
                                        <Button 
                                          onClick={() => deleteArticle(item.idarticle)} 
                                          size="sm" 
                                          variant="outline-danger"><FontAwesomeIcon icon={faTrash}/>
                                        </Button>
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