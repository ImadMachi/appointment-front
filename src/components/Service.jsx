
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBBtn } from "mdb-react-ui-kit";

import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import IconBox from "./IconBox";

function  Service  () { 
  const [show, setShow] = useState(false);
const handleShow = () => setShow(true);
 return ( 
    <div className="shadow-sm p-4 my-4">
      <div className="d-flex justify-content-between">
      <h4 className="">Service:</h4>
      <Button color='danger'  className="text-center btn-danger btn " onClick={handleShow}>
      <IconBox className="">
            <FontAwesomeIcon icon={faAdd} />
          </IconBox>
      </Button>
      </div>
      <PopupAdd show={show} setShow={setShow} />
        <form action="">
            <div className=" d-flex-row justify-content-between text-center">
      
      <button type="button" class="btn btn-outline-danger mx-2 my-3"> appointment to get vaccinated against covid 19</button>
      <button type="button" class="btn btn-outline-warning mx-2 my-3">appointment to change glasses</button>
      <button type="button" class="btn btn-outline-info mx-2 my-3"> appointment to see the doctor</button>
      <button type="button" class="btn btn-outline-danger mx-2 my-3">appointment to change driver licence</button>
      <button type="button" class="btn btn-outline-warning mx-2 my-3">  appointment to change the business card</button>
      <button type="button" class="btn btn-outline-info mx-2 my-3">appointment to change the national cards</button>
  </div>
  <div className="Row">
    <div className="col text-center">
 
  </div>
  </div>
  </form>
    </div>
    )
 }
  
  export default Service;
  
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
              <Form.Label>Service Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="service..."
                autoFocus
              />
             </Form.Group>
        <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>description</Form.Label>
              <Form.Control as="textarea" rows={2} />
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
