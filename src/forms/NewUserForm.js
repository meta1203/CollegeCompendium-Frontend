import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { useState } from 'react';
import useAPI from '../useAPI';

export default function (props) {
  const { 
    user,
    createStudent,
    createAdmin,
  } = useAPI();

  // form values
  const [newUser, setNewUser] = useState({
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
  });

  const [newStudent, setNewStudent] = useState({});
  const [newCollege, setNewCollege] = useState({});

  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [accType, setAccType] = useState("Student");

  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(`${email} ${firstName} ${middleInitial} ${lastName} ${city} ${state} ${accType}`)
    if (accType === "Student") {
      createStudent({
        ...newUser,
        ...newStudent,
        location: city + ", " + state
      }).then(() => alert("new student created!"));
    } else if (accType === "College Administrator") {
      createAdmin({
        ...newUser,
        ...newCollege,
        location: city + ", " + state
      }).then(() => alert("new admin created!"));
    } else {
      alert("Something's sussy... ඞ");
    }
  }

  function handleNewUserChange(event) {
    event.preventDefault();

    // clone new user object
    let update = {...newUser};
    // make the single change
    update[event.target.id] = event.target.value;
    // push changed object
    setNewUser(update);
  }

  function handleNewStudentChange(event) {
    event.preventDefault();

    // clone new user object
    let update = {...newStudent};
    // make the single change
    update[event.target.id] = event.target.value;
    // push changed object
    setNewStudent(update);
  }

  function handleNewCollegeChange(event) {
    event.preventDefault();

    // clone new user object
    let update = {...newCollege};
    // make the single change
    update[event.target.id] = event.target.value;
    // push changed object
    setNewCollege(update);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Welcome! Let's get you started!</h2>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email*</Form.Label>
          <Form.Control type="email" placeholder="Enter email" id="email" value={newUser.email} onChange={handleNewUserChange} />
          <Form.Text className="text-muted">
            We'll definitely "never" share your email with anyone else. 😛
          </Form.Text>
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>First Name*</Form.Label>
          <Form.Control id="firstName" value={newUser.firstName} onChange={handleNewUserChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Middle Initial</Form.Label>
          <Form.Control id="middleInitial" value={newUser.middleInitial} onChange={handleNewUserChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Last Name*</Form.Label>
          <Form.Control id="lastName" value={newUser.lastName} onChange={handleNewUserChange} />
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City*</Form.Label>
          <Form.Control value={city} onChange={(e) => setCity(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State*</Form.Label>
          <Form.Control value={state} onChange={(e) => setState(e.target.value)} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
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
      </Row>

      <hr />

      {/* show student vs college forms */}

      {accType === "Student" ?
      <>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>High school*</Form.Label>
            <Form.Control id="highschool" value={newStudent.highschool} onChange={handleNewStudentChange} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>College</Form.Label>
            <Form.Control id="college" value={newStudent.college} onChange={handleNewStudentChange} />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>ACT Score</Form.Label>
            <Form.Control id="actScore" value={newStudent.actScore} onChange={handleNewStudentChange} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>SAT Score</Form.Label>
            <Form.Control id="satScore" value={newStudent.satScore} onChange={handleNewStudentChange} />
          </Form.Group>
        </Row>
        </>
        : undefined}

      <hr />

      <Button variant="primary" type="submit" onclick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}