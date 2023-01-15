import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import IconBox from "./IconBox";

function Service() {
  var handleShow = () => setShow(true);
  var handlhead = () => setShow(false);
  var [show, setShow] = useState(false);

  var [shown, setShown] = useState(false);
  var handleShown = () => setShown(true);

  let [results, setResults] = useState([]);

  useEffect(() => {
    const getSallservice = () => {
      axios
        .get("http://127.0.0.1:8000/api/list-services")
        .then((data) => {
          setResults(data.data);
        })

        .catch((error) => console.log(error));
    };
    getSallservice();
    {
      console.log(results);
    }
  }, []);
  return (
    <div className="shadow-sm p-4 my-4">
      <div className="d-flex justify-content-between">
        <h4 className="">Service:</h4>
        <Button color="danger" className="text-center btn-danger btn " onClick={handleShow}>
          <IconBox className="">
            <FontAwesomeIcon icon={faAdd} />
          </IconBox>
        </Button>
      </div>
      <PopupAdd show={show} setShow={setShow} />
      <PopupModefier show={shown} setShow={setShown} />
      <form action="">
        <div className=" d-flex-row justify-content-between text-center">
          {results.map((service) => (
            <button
              type="button"
              key={service.id}
              onClick={() => {
                handleShow();

                localStorage.setItem("service", service.id);
                console.log(localStorage.getItem("service"));
              }}
              className="btn btn-outline-info mx-2 my-3"
            >
              {service.name}
            </button>
          ))}
        </div>
        <div className="Row">
          <div className="col text-center"></div>
        </div>
      </form>
    </div>
  );
}

export default Service;

function PopupAdd({ show, setShow }) {
  const [name = "", setName] = useState();
  const [discription = "", setDiscription] = useState();
  const handleClose = () => setShow(false);
  const service = {
    name: name,
    slug: discription,
    description: discription,
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="d-inline-block">
        <Modal.Header closeButton>
          <Modal.Title>Add New Service:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="form" method="post">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Service Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="service..."
                autoFocus
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="discription"
                value={discription}
                onChange={(e) => setDiscription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            value="save"
            onClick={() => {
              // Prevent the default submit and page reload

              // Handle validations
              axios.post("http://127.0.0.1:8000/api/create-service", service).then((response) => {
                console.log(response);
                if (response.status == 200) {
                  handleClose();
                  name = "";
                  discription = "";
                }
              });
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function PopupModefier({ show, setShow }) {
  var service = 1;
  let [results, setResults] = useState([]);
  useEffect(() => {
    const getservice = () => {
      axios
        .get("http://127.0.0.1:8000/api/get-service/" + service)
        .then((data) => {
          setResults(data.data);
        })

        .catch((error) => console.log(error));
    };
    getservice();
    {
      console.log(results);
    }
  }, []);

  var [name = "", setName] = useState();
  var [discription = "", setDiscription] = useState();
  const handleClose = () => setShow(false);

  service = localStorage.getItem("service");

  return (
    <>
      <Modal
        onShow={useEffect(() => {
          const getservice = () => {
            axios
              .get("http://127.0.0.1:8000/api/get-service/" + service)
              .then((data) => {
                setResults(data.data);
              })

              .catch((error) => console.log(error));
          };
          getservice();
          {
            console.log(results);
          }
        }, [])}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="d-inline-block"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Service:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="form" method="post">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Service Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="service..."
                autoFocus
                name="name"
                value={results.name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="discription"
                value={results.description}
                onChange={(e) => setDiscription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            value="save"
            onClick={() => {
              // Prevent the default submit and page reload

              // Handle validations
              axios.post("http://127.0.0.1:8000/api/create-service", service).then((response) => {
                console.log(response);
                if (response.status == 200) {
                  handleClose();
                  name = "";
                  discription = "";
                }
              });
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
