import { useEffect, useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconBox from "../components/IconBox";
import Service from "../components/Service";
import ManageTecnicien from "../components/ManageTecnicien";
import axios from "axios";

const SettingsPage = () => {
  const [selectedSetting, setSelectedSetting] = useState(1);
  const handleClick = (setting) => {
    setSelectedSetting(setting);
  };
  const isSelected = (setting) => selectedSetting === setting;
  const settings = [
    { id: 1, name: "General Information" },
    { id: 2, name: "Working Hours" },
    { id: 3, name: "Services" },
    { id: 4, name: "Manage Technicians" },
  ];
  return (
    <main>
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={6} lg={3}>
            <div className="text-center">
              <img src="https://i.pravatar.cc/100" alt="avatar" className="rounded-circle" />
              <h2 className="mb-0">John Doe</h2>
              <h5 className="text-muted fw-normal mt-0">Admin</h5>
            </div>
            <ul className="d-flex flex-column mt-5 ">
              {settings.map((setting) => (
                <li
                  key={setting.id}
                  className={"mb-3 " + (isSelected(setting.id) && "text-primary fw-bold")}
                  onClick={() => handleClick(setting.id)}
                >
                  {setting.name}
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={12} md={6} lg={9}>
            {isSelected(1) && <BasicExample />}
            {isSelected(2) && <WorkingHours />}
            {isSelected(3) && <Service />}
            {isSelected(4) && <ManageTecnicien />}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

function WorkingHours() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <div className="px-4 py-4 shadow-sm ">
      <Popupmodifier show={show} setShow={setShow} />
      <div className="d-flex justify-content-between">
        <h3>Heures de travail</h3>
        <Button variant="primary" type="submit" className="" onClick={handleShow}>
          modifier
        </Button>
      </div>
      <div className="d-flex justify-content-between my-4">
        <div className="d-flex">
          <IconBox className="me-3">
            <FontAwesomeIcon icon={faClock} />
          </IconBox>{" "}
          <h5>Dimanche</h5>
        </div>
        <p className=" text-danger">Non disponible</p>
      </div>

      <div className="d-flex justify-content-between my-4">
        <div className="d-flex">
          <IconBox className="me-3">
            <FontAwesomeIcon icon={faClock} />
          </IconBox>{" "}
          <h5>Lundi</h5>
        </div>
        <p className=" text-secondary">09:00 - 18:00</p>
      </div>

      <div className="d-flex justify-content-between my-4">
        <div className="d-flex">
          <IconBox className="me-3">
            <FontAwesomeIcon icon={faClock} />
          </IconBox>{" "}
          <h5>Mardi</h5>
        </div>
        <p className=" text-secondary">09:00 - 18:00</p>
      </div>

      <div className="d-flex justify-content-between my-4">
        <div className="d-flex">
          <IconBox className="me-3">
            <FontAwesomeIcon icon={faClock} />
          </IconBox>{" "}
          <h5>Mercredi</h5>
        </div>
        <p className=" text-secondary">09:00 - 18:00</p>
      </div>

      <div className="d-flex justify-content-between my-4">
        <div className="d-flex">
          <IconBox className="me-3">
            <FontAwesomeIcon icon={faClock} />
          </IconBox>{" "}
          <h5>Jeudi</h5>
        </div>
        <p className=" text-secondary">09:00 - 18:00</p>
      </div>
    </div>
  );
}

function BasicExample() {
  // const [succursale, setSuccursale] = useState({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/api/get-succurcale/1");
        // setSuccursale(result.data);
        setName(result.data.name);
        setPhone(result.data.phone);
        setAddress(result.data.address);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Form className="shadow-lg px-4 py-4">
      <Form.Group className="mb-3" controlId="formBasicTExt">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
}
function Popupmodifier({ show, setShow }) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="d-inline-block">
        <Modal.Header closeButton>
          <Modal.Title>Modifier les heures de travail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="d-flex justify-content-between py-2">
              <div className="d-flex text-center">
                <input type="checkbox" className="btn-lg form-check-input mx-2 " />
                <h5>Mon</h5>
              </div>
              <select name="pets" id="pet-select" placeholder="De">
                <option value="dog">9:00</option>
                <option value="cat">10:00</option>
                <option value="hamster">11:00</option>
                <option value="parrot">12:00</option>
                <option value="spider">14:00</option>
                <option value="goldfish">15:00</option>
                <option value="goldfish">16:00</option>
              </select>
              <div>-</div>

              <select name="pets" id="pet-select" placeholder="Au">
                <option value="dog">9:30</option>
                <option value="cat">10:30</option>
                <option value="ca">10:45</option>
                <option value="hamster">11:00</option>
                <option value="parrt">11:30</option>
                <option value="parrot">12:00</option>
                <option value="spidr">12:30</option>
                <option value="spider">14:00</option>
                <option value="goldfish">15:00</option>
                <option value="goldfish">16:00</option>
              </select>
            </div>

            <div className="d-flex justify-content-between py-2 ">
              <div className="d-flex  ">
                <input type="checkbox" className="btn-lg form-check-input mx-2" />
                <h5 className=""> Tues </h5>
              </div>
              <select name="pets" id="pet-select" placeholder="De" className="">
                <option value="dog">9:00</option>
                <option value="cat">10:00</option>
                <option value="hamster">11:00</option>
                <option value="parrot">12:00</option>
                <option value="spider">14:00</option>
                <option value="goldfish">15:00</option>
                <option value="goldfish">16:00</option>
              </select>
              <div>-</div>

              <select name="pets" id="pet-select" placeholder="Au">
                <option value="dog">9:30</option>
                <option value="cat">10:30</option>
                <option value="ca">10:45</option>
                <option value="hamster">11:00</option>
                <option value="parrt">11:30</option>
                <option value="parrot">12:00</option>
                <option value="spidr">12:30</option>
                <option value="spider">14:00</option>
                <option value="goldfish">15:00</option>
                <option value="goldfish">16:00</option>
              </select>
            </div>

            <div className="d-flex justify-content-between py-2">
              <div className="d-flex">
                <input type="checkbox" className="btn-lg form-check-input  mx-2" />
                <h5>Wed</h5>
              </div>
              <select name="pets" id="pet-select" placeholder="De">
                <option value="dog">9:00</option>
                <option value="cat">10:00</option>
                <option value="hamster">11:00</option>
                <option value="parrot">12:00</option>
                <option value="spider">14:00</option>
                <option value="goldfish">15:00</option>
                <option value="goldfish">16:00</option>
              </select>
              <div>-</div>

              <select name="pets" id="pet-select" placeholder="Au">
                <option value="dog">9:30</option>
                <option value="cat">10:30</option>
                <option value="ca">10:45</option>
                <option value="hamster">11:00</option>
                <option value="parrt">11:30</option>
                <option value="parrot">12:00</option>
                <option value="spidr">12:30</option>
                <option value="spider">14:00</option>
                <option value="goldfish">15:00</option>
                <option value="goldfish">16:00</option>
              </select>
            </div>

            <div className="d-flex justify-content-between py-2">
              <div className="d-flex">
                <input type="checkbox" className="btn-lg form-check-input mx-2" />
                <h5>Thur</h5>
              </div>
              <select name="pets" id="pet-select" placeholder="De">
                <option value="dog">9:00</option>
                <option value="cat">10:00</option>
                <option value="hamster">11:00</option>
                <option value="parrot">12:00</option>
                <option value="spider">14:00</option>
                <option value="goldfish">15:00</option>
                <option value="goldfish">16:00</option>
              </select>
              <div>-</div>

              <select name="pets" id="pet-select" placeholder="Au">
                <option value="dog">9:30</option>
                <option value="cat">10:30</option>
                <option value="ca">10:45</option>
                <option value="hamster">11:00</option>
                <option value="parrt">11:30</option>
                <option value="parrot">12:00</option>
                <option value="spidr">12:30</option>
                <option value="spider">14:00</option>
                <option value="goldfish">15:00</option>
                <option value="goldfish">16:00</option>
              </select>
            </div>

            <div className="d-flex justify-content-between py-2">
              <div className="d-flex">
                <input type="checkbox" className="btn-lg form-check-input mx-2" />
                <h5>Frida</h5>
              </div>
              <select name="pets" id="pet-select" placeholder="De">
                <option value="dog">9:00</option>
                <option value="cat">10:00</option>
                <option value="hamster">11:00</option>
                <option value="parrot">12:00</option>
                <option value="spider">14:00</option>
                <option value="goldfish">15:00</option>
                <option value="goldfish">16:00</option>
              </select>
              <div>-</div>

              <select name="pets" id="pet-select" placeholder="Au">
                <option value="dog">9:30</option>
                <option value="cat">10:30</option>
                <option value="ca">10:45</option>
                <option value="hamster">11:00</option>
                <option value="parrt">11:30</option>
                <option value="parrot">12:00</option>
                <option value="spidr">12:30</option>
                <option value="spider">14:00</option>
                <option value="goldfish">15:00</option>
                <option value="goldfish">16:00</option>
              </select>
            </div>
            <div className="d-flex justify-content-between py-2">
              <div className="d-flex">
                <input type="checkbox" className="btn-lg form-check-input mx-2" />
                <h5>Satur</h5>
              </div>
              <select name="pets" id="pet-select" placeholder="De">
                <option value="dog">9:00</option>
                <option value="cat">10:00</option>
                <option value="hamster">11:00</option>
                <option value="parrot">12:00</option>
                <option value="spider">14:00</option>
                <option value="goldfish">15:00</option>
                <option value="goldfish">16:00</option>
              </select>
              <div>-</div>

              <select name="pets" id="pet-select" placeholder="Au">
                <option value="dog">9:30</option>
                <option value="cat">10:30</option>
                <option value="ca">10:45</option>
                <option value="hamster">11:00</option>
                <option value="parrt">11:30</option>
                <option value="parrot">12:00</option>
                <option value="spidr">12:30</option>
                <option value="spider">14:00</option>
                <option value="goldfish">15:00</option>
                <option value="goldfish">16:00</option>
              </select>
            </div>
            <div className="d-flex justify-content-between py-2">
              <div className="d-flex">
                <input type="checkbox" className="btn-lg form-check-input mx-2" />
                <h5>Sund</h5>
              </div>
              <select name="pets" id="pet-select" placeholder="De">
                <option value="dog">9:00</option>
                <option value="cat">10:00</option>
                <option value="hamster">11:00</option>
                <option value="parrot">12:00</option>
                <option value="spider">14:00</option>
                <option value="goldfish">15:00</option>
                <option value="goldfish">16:00</option>
              </select>
              <div>-</div>

              <select name="pets" id="pet-select" placeholder="Au">
                <option value="dog">9:30</option>
                <option value="cat">10:30</option>
                <option value="ca">10:45</option>
                <option value="hamster">11:00</option>
                <option value="parrt">11:30</option>
                <option value="parrot">12:00</option>
                <option value="spidr">12:30</option>
                <option value="spider">14:00</option>
                <option value="goldfish">15:00</option>
                <option value="goldfish">16:00</option>
              </select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            annuler
          </Button>
          <Button variant="primary">Enregistrer</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SettingsPage;
