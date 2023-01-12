import { Alert, Badge, Col, Modal, Row } from "react-bootstrap";
import { createPortal } from "react-dom";

const AppointmentModal = ({ isModalOpen, setIsModalOpen, appointment }) => {
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
            <p>{appointment.extendedProps.customer}</p>
            <p>{appointment.extendedProps.phone}</p>
            <p>{appointment.extendedProps.email}</p>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>,
    document.getElementById("modal")
  );
};

export default AppointmentModal;
