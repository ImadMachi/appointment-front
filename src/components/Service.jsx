import { Button, Form } from "react-bootstrap";

const Service = () => (
    <div className="shadow-sm p-2 my-4">
        <h4 className="my-4">Service:</h4>
        <form action="">
            <div className="mx-5">
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="rendez vous pour se faire vacciner contre covid 19" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="rendez vous pour changer les lunettes" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="rendez vous pour voir le docteur" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="rendez vous pour changer le permet" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="rendez vous pour changer la carte visite" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="rendez vous pour changer la carte nationale" />
  </Form.Group>
  </div>
  <div className="Row">
    <div className="col text-center">
  <Button variant="primary" type="submit" className="">
   Valider
  </Button>
  </div>
  </div>
  </form>
    </div>
  );
  
  export default Service;