import { faPlusSquare, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React,  {useState, useEffect}  from 'react';
import {Card,Form,Button,Col} from 'react-bootstrap';
import { useParams,useHistory } from 'react-router-dom';


import 'react-toastify/dist/ReactToastify.css';

export default function Article() {

    const url = "http://localhost:8080/api/articles/";
    
    const [data, setDaTa] = useState({  
        idarticle:'',
        description:'',
        idvendor:'',
        status:'',
        price:'',
        creator:''
    });

    function submit(e){
        e.preventDefault();
        console.log(data);
        axios.post(url,{
           idarticle: data.idarticle,
           description: data.description,
           status: data.status,
           price: data.price,
           creator: data.creator, 
           idvendor: data.idvendor
        }).then(res =>{
            console.log(res.data);
            alert("Articulo guardado")
        })
    };

    function handle(e){
        const newData={...data}
        newData[e.target.id] = e.target.value
        setDaTa(newData)
        console.log(newData);
    };
    
    const params = useParams();
    useEffect(() => {    
        if(params.id)
        {
            findArticleById(params.id)
        }
            
    },[])

    function findArticleById(idarticle){
        axios.get(url+idarticle)
        .then((response) => {
            var data = response.data;
            setDaTa({
            idarticle: data.idarticle,
            description: data.description,
            status: data.status,
            price: data.price,
            creator: data.creator,
            dateup: data.dateup, 
            idvendor: data.idvendor})
        })
    };
    
    let history = useHistory();

    function handleClick() {
      history.push("/listArticle");
    }

    return (
        
            <Card className={"border boerder-dark"}>
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Añade nuevo articulo</Card.Header>
                
                    <Form onSubmit={(e)=> submit(e)} id="articleForm">
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} >
                                    <Form.Label>Código del Articulo</Form.Label>
                                    <Form.Control required onChange={(e)=>handle(e)} type="text" id="idarticle" value={data.idarticle} name="idarticle" placeholder="Código del Articulo" />
                            </Form.Group>
                            <Form.Group>
                                
                                    <Form.Label>Descripcion del Articulo</Form.Label>
                                    <Form.Control required onChange={(e)=>handle(e)} type="text" id="description" value={data.description} type="test" name="description"placeholder="Descripcion del Articulo" />
                                
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Código de Proveedor</Form.Label>
                                <Form.Control required  onChange={(e)=>handle(e)} type="text" id="idvendor" value={data.idvendor} type="test" name="idvendor" placeholder="Código de Proveedor" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Fecha de Creación</Form.Label>
                                <Form.Control required onChange={(e)=>handle(e)} type="text" id="dateup" value={data.dateup} type="test" name="dateup" placeholder="Fecha creacion" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Estado del articulo</Form.Label>
                                <Form.Control  as="select" defaultValue="Choose..." onChange={(e)=>handle(e)} type="text" id="status" type="test" name="status" placeholder="Estado del articulo" >
                                    <option  value={data.status} >Active</option>
                                    <option  value={data.status}>Inactive</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Precio</Form.Label>
                                <Form.Control  required onChange={(e)=>handle(e)} type="text" id="price" value={data.price} type="test" name="price" placeholder="Precio" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Creador</Form.Label>
                                <Form.Control required onChange={(e)=>handle(e)} type="text" id="creator" value={data.creator} type="test" name="creator" placeholder="Creador" />
                            </Form.Group>
                        </Form.Row>
                            <Card.Footer className=" text-right">
                            <Button  className="text-right" size="sm" variant="success" type="submit">
                                         <FontAwesomeIcon icon={faSave} /> Guardar
                                         
                            </Button>

                            <Button size="sm" className="ml-2" variant="info" type="button" onClick={handleClick}> Lista de articulos </Button>
                            
                            </Card.Footer>
                        </Card.Body>
                    </Form>
                </Card>
    )
}
