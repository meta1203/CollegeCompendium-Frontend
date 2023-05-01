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

    const [currentUser, setCurrentUser] = useState(user);

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
        <Form.Group as={Col} >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={currentUser.email} id="email" onChange={handleStudentChange} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
      </Row>

      <hr/>

      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>First Name</Form.Label>
          <Form.Control id="firstName" value={currentUser.firstName} onChange={handleStudentChange} />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Middle Initial</Form.Label>
          <Form.Control id="middleInitial" value={currentUser.middleInitial} onChange={handleStudentChange} />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Last Name</Form.Label>
          <Form.Control id="lastName" value={currentUser.lastName} onChange={handleStudentChange} />
        </Form.Group>
      </Row>

      <hr/>

      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Address</Form.Label>
          <Form.Control id="address" value={currentUser.location.address} onChange={event => {
            let updatedUser = {...currentUser};
            updatedUser.location = {
              address: event.target.value,
              latitude: 0,
              longitude: 0
            };
            setCurrentUser(updatedUser);
          }} />
        </Form.Group>
      </Row>
      <hr />

      <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>High school</Form.Label>
            <Form.Control id="highschool" value={currentUser.highschool} onChange={handleStudentChange} />
          </Form.Group>
          <Form.Group as={Col} >
            <Form.Label>College</Form.Label>
            <Form.Control id="college" value={currentUser.college} onChange={handleStudentChange} />
          </Form.Group>
        </Row>
        <hr/>
        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>ACT Score</Form.Label>
            <Form.Control id="actScore" value={currentUser.actScore} onChange={handleStudentChange} />
          </Form.Group>
          <Form.Group as={Col} >
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