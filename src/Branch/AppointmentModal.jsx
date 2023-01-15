import { Badge, Col, Modal, Row } from "react-bootstrap";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";

const AppointmentModal = ({ isModalOpen, setIsModalOpen, appointment }) => {
  const [success, setsuccess] = useState("");
  const handleDeleteClick = async () => {
    try {
      const result = await axios.delete(`/api/delete-appointment/${appointment.extendedProps.id}`);
      setsuccess("Appointment deleted");
    } catch (error) {
      console.error(error);
    }
  };
  const handleCheckClick = async () => {
    try {
      const result = await axios.put(`/api/update-appointment/${appointment.extendedProps.id}`, { status: "done" });
      setsuccess("Appointment set to done");
    } catch (error) {
      console.error(error);
    }
  };

  return createPortal(
    <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)} centered backdrop={false}>
      <Modal.Header closeButton>
        <Modal.Title className="w-100">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <span>{appointment.title}</span>
            <Badge bg="success" pill bsPrefix="fs-6 px-2 text-white">
              {appointment.extendedProps.status}
            </Badge>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <p className="text-muted">BookingId</p>
            <p className="text-muted">Phone</p>
            <p className="text-muted">Email</p>
          </Col>
          <Col>
            <p>{appointment.extendedProps.id}</p>
            <p>{appointment.extendedProps.phone}</p>
            <p>{appointment.extendedProps.email}</p>
          </Col>
        </Row>
        <div className="text-end">
          <span className="text-success me-3" title="Make done" onClick={handleCheckClick}>
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
          <span className="text-danger" title="Delete" onClick={handleDeleteClick}>
            <FontAwesomeIcon icon={faTrash} />
          </span>
        </div>
        {success && <div className="alert alert-success text-center">{success}</div>}
      </Modal.Body>
    </Modal>,
    document.getElementById("modal")
  );
};

export default AppointmentModal;
