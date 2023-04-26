import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
import useAPI from '../useAPI';

export default function (props) {
    const {
        user, 
        updateStudent
    } = useAPI();

    const [currentUser, setCurrentUser] = useState({
        email: user.email,
        firstName: user.firstName,
        middleInitial: user.middleInitial,
        lastName: user.lastName,
        username: user.username,
        city: user.city,
        state: user.state,
        highschool: user.highschool,
        college: user.college,
        actScore: user.actScore,
        satScore: user.satScore,
      });

      function handleStudentChange(event) {
        event.preventDefault();

        // clone new user object
        let update = {...currentUser};
        // make the single change
        update[event.target.id] = event.target.value;
        // push changed object
        setCurrentUser(update);
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        updateStudent({
            ...currentUser
          }).then(() => alert("Information updated successfully!"));
        //alert(`${email} ${firstName} ${middleInitial} ${lastName} ${city} ${state} ${accType}`)
      }

    return (

     <Form onSubmit={handleSubmit}>
        <Alert variant="primary">
            <Alert.Heading>Welcome to your profile!</Alert.Heading>
            <p>
            Here you can edit your information.
            </p>
            <hr/>
        </Alert>
      <Row className="mb-3">
        <h2> Your information</h2>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={currentUser.email}id="email" onChange={handleStudentChange} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
      </Row>

      <hr/>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>First Name</Form.Label>
          <Form.Control id="firstName" value={currentUser.firstName} onChange={handleStudentChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Middle Initial</Form.Label>
          <Form.Control id="middleInitial" value={currentUser.middleInitial} onChange={handleStudentChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Last Name</Form.Label>
          <Form.Control id="lastName" value={currentUser.lastName} onChange={handleStudentChange} />
        </Form.Group>
      </Row>

      <hr/>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control value={currentUser.city} onChange={handleStudentChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control value={currentUser.state} onChange={handleStudentChange} />
        </Form.Group>
      </Row>
      <hr />
      <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>High school</Form.Label>
            <Form.Control id="highschool" value={currentUser.highschool} onChange={handleStudentChange} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>College</Form.Label>
            <Form.Control id="college" value={currentUser.college} onChange={handleStudentChange} />
          </Form.Group>
        </Row>
        <hr/>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>ACT Score</Form.Label>
            <Form.Control id="actScore" value={currentUser.actScore} onChange={handleStudentChange} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>SAT Score</Form.Label>
            <Form.Control id="satScore" value={currentUser.satScore} onChange={handleStudentChange} />
          </Form.Group>
        </Row>
      <Button variant="primary" type="submit" onclick={handleSubmit}>
        Update
      </Button>
    </Form>
    );
} 