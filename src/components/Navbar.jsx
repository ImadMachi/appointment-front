import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faGear } from "@fortawesome/free-solid-svg-icons";
import IconBox from "./IconBox";

const Navbar = () => (
  <header className="bg-primary">
    <Container>
      <div className="d-flex justify-content-between align-items-center text-white py-2">
        <IconBox className="flex-grow-1">
          <FontAwesomeIcon icon={faCalendarDays} />
        </IconBox>
        <IconBox className="me-3">
          <FontAwesomeIcon icon={faGear} />
        </IconBox>
        <img src="https://i.pravatar.cc/35" alt="avatar" className="rounded-circle" />
      </div>
    </Container>
  </header>
);

export default Navbar;
