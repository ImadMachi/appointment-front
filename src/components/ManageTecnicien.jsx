
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ManageTecnicien() {
   const listTechnicien=['hicham chakir','imad maachi ','Yassine Echamkh ','Achraf']
   const [show, setShow] = useState(false);
   const handleShow = () => setShow(true);
   let [results, setResults] =useState([])

   useEffect(() =>{
   const getPostsData = () => {
    
    axios
    .get("http://127.0.0.1:8000/api/list-services")
    .then(data =>{  
      setResults(data.data); 
    
   
  }
      )
    .catch(error => console.log(error));
    };
     getPostsData()
  }
    , [])
  return (

    <Row xs={1} md={2} className="g-4">
   
      {results.map((tech ,idx) => (
        <Col>
          <Card>
            <Card.Img  className='rounded'src="https://i.pravatar.cc/200"  height="100"/>
            <Card.Body onClick={handleShow}>
              
              <Card.Title>{tech.name  }</Card.Title>
              <Card.Text>
               {tech.description}
              </Card.Text>
              
            </Card.Body>
          </Card>

        </Col>

      ))}
      <PopupAdd show={show} setShow={setShow} />
    </Row>
  );
}
export default ManageTecnicien;

function PopupAdd( {show ,setShow}){


    const handleClose = () => setShow(false);
  
    return (
      <>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="d-inline-block"
        >
          <Modal.Header closeButton>
            <Modal.Title>Add New Service:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
  
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>firstName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="FirstName..."
                  autoFocus
                />
               </Form.Group>

               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>lastName:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="lastname..."
                  autoFocus
                />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>cin:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="cin..."
                  autoFocus
                />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>phoneNumber:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="phoneNumber..."
                  autoFocus
                />
               </Form.Group>
            </Form>
         
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              cancel
            </Button>
            <Button variant="primary">Save</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
    }