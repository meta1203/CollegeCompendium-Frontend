import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function(props){
    return(
        <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll "never" share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Row>   


        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>First Name</Form.Label>
            <Form.Control />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Middle Initial</Form.Label>
            <Form.Control />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Last Name</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>


        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Account Type</Form.Label>
            <Form.Select defaultValue="Student">
              <option>Student</option>
              <option>College Administrator</option>
            </Form.Select>
          </Form.Group>
  
  
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
}