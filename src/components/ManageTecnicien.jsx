
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ManageTecnicien() {
   const listTechnicien=['hicham chakir','imad maachi ','Yassine Echamkh ','Achraf']
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img  className='rounded'src="https://i.pravatar.cc/200"  height="100"/>
            <Card.Body>
              <Card.Title>{listTechnicien[idx]}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ManageTecnicien;