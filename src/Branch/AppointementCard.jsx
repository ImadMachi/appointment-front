import { faCalendar, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IconBox from '../components/IconBox';
import {Link} from "react-router-dom"; 



function AppointementCardd() {
  return (
    <div className='m-2 p-3'>
    <Card >
      <Card.Header className='text-center' > <h2 >Welcome to the Public Office Appointment Portal !</h2></Card.Header>
      <Card.Body className='bg-muted'>
        <Card.Title className='text-info text-center'>Geeks Appointment</Card.Title>
        <Card.Text className='text-center'><h5>
        This digital system relieves you from the large number of movements and through you and through you.</h5>
        </Card.Text>
        <div className='d-inline  '>
          <div className='d-inline  '>
        <Link className=" btn btn-primary  m-5 p-2" to='/dashboard'> <IconBox className="m-3">
            <FontAwesomeIcon icon={faEdit} />
          </IconBox>Keep track of my appointments</Link>
          <Link className="btn btn-primary button p-2"> <IconBox className="m-3">
            <FontAwesomeIcon icon={faCalendar} />
          </IconBox>make an appointment</Link>
          </div>
          <img src="images/TaeAugust11.jpg" alt="appointement" height={350} className="m-3" />
          </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default AppointementCardd;