import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

export default function CreateAccount() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
 


  return (
   


      <Modal show={show} onHide={handleClose}  className=" py-2 px-3">
        <Modal.Header closeButton >
        <Modal.Title className='text-secondary '>Please enter the following information:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          
            <h5 className='text-secondary mx-3 '>where ?</h5>
           
              <Form.Label>Search words::</Form.Label>
              <Form.Control
                type="text"
                placeholder="city or village ..."
                autoFocus
              />
              {/* 
              <Form.Text className='text-danger' onHide={handleshown} shown={shown}>Mandatory information</Form.Text>
              */ }
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address :</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
               {/*
              <Form.Text className='text-danger'>E-mail
  Please enter either an email address or a phone</Form.Text> */ }
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number :</Form.Label>
              <Form.Control
                type="text"
                placeholder="phone +212..."
                autoFocus
              />
               {/*
              <Form.Text className='text-danger'>E-mail
  Please enter either an email address or a phone</Form.Text> */ }
            </Form.Group>
            
            <h5 className='text-secondary mx-3 '>what ?</h5>
            

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nature of appointment :</Form.Label>
            
              <Form.Select aria-label="Default select example" className='text-bold '>
      <option>Open this select menu</option>
      <option value="1">appointment to get vaccinated against covid 19</option>
      <option value="2">appointment to change glasses</option>
      <option value="3">appointment to see the doctor</option>
      <option value="4">appointment to change driver licence</option>
      <option value="5">appointment to change the business card</option>
      <option value="6">appointment to change the national card</option>
    </Form.Select>
      
            </Form.Group>
           
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Comment</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
          </Form>
          
          <reCAPTCHA
sitekey="6LcnG_IjAAAAAFq4ZOCsF2i1JnUopeaQ1icL0MJV"
/>
        </Modal.Body>
        <Modal.Footer className='text-center'>
          <Link variant="secondary" className='btn btn-danger'  to="/" onClick={handleClose}>
            Close
          </Link>
          <Link className=" btn btn-primary mx-3" to="/dashboard" >
            Save Changes
          </Link>
        </Modal.Footer>
      </Modal>
 
  );
}