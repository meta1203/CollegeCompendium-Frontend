import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { useState } from 'react';


export default function(props){
      const [email, setEmail] = useState("");
      const [firstName, setFirstName] = useState("");
      const [middleInitial, setMiddleInitial] = useState("");
      const [lastName, setLastName] = useState("");
      const [city, setCity] = useState("");
      const [state, setState] = useState("");
      const [accType, setAccType] = useState("Student");

      const handleSubmit = (event) => {
        event.preventDefault();
        //alert(`${email} ${firstName} ${middleInitial} ${lastName} ${city} ${state} ${accType}`)
      }
    return(
        <Form onSubmit={handleSubmit}>
        <h2>Welcome! Let's get you started!</h2>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Form.Text className="text-muted">
            We'll definitely "never" share your email with anyone else. 😛
            </Form.Text>
          </Form.Group>
        </Row>   


        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>First Name*</Form.Label>
            <Form.Control value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Middle Initial</Form.Label>
            <Form.Control value={middleInitial} onChange={(e) => setMiddleInitial(e.target.value)}/>
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Last Name*</Form.Label>
            <Form.Control value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </Form.Group>
        </Row>


        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City*</Form.Label>
            <Form.Control value={city} onChange={(e) => setCity(e.target.value)}/>
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State*</Form.Label>
            <Form.Control value={state} onChange={(e) => setState(e.target.value)}/>
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Account Type*</Form.Label>
            <Form.Select defaultValue="Student" value={accType} onChange={(e) => setAccType(e.target.value)}>
              <option>Student</option>
              <option>College Administrator</option>
            </Form.Select>
            <Form.Text className="text-muted">
            * indicates a required field
            </Form.Text>
          </Form.Group>
  
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
}