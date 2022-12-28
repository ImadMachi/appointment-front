import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faGear } from "@fortawesome/free-solid-svg-icons";
import IconBox from "./IconBox";
import { Link } from "react-router-dom";

const Navbar = () => (
  <header className="bg-primary">
    <Container>
      <div className="d-flex justify-content-between align-items-center text-white py-2">
        <Link to="/dashboard" className="flex-grow-1 text-white">
          <IconBox className="">
            <FontAwesomeIcon icon={faCalendarDays} />
          </IconBox>
        </Link>
        <Link to="/settings" className="me-3 text-white">
          <IconBox>
            <FontAwesomeIcon icon={faGear} />
          </IconBox>
        </Link>
        <img src="https://i.pravatar.cc/35" alt="avatar" className="rounded-circle" />
      </div>
    </Container>
  </header>
);

export default Navbar;
