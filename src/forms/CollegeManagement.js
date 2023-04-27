import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import CollegeFrame from '../parts/CollegeFrame';

import { useState } from 'react';
import useAPI from '../useAPI';

export default function CollegeManagement() {
  const {
    user,
    updateCollege
  } = useAPI()

  const [college, setCollege] = useState(user.college);
  const [url, setUrl] = useState("");

  function addURL() {
    setCollege({
      ...college,
      photos: [...college.photos, url]
    });
    setUrl('');
  }
  function handleURLChange(event) {
    setUrl(event.target.value);
  }

  function handleObjChange(event) {
    let updatedCollege = {...college};
    updatedCollege[event.target.id] = event.target.value;
    setCollege(updatedCollege);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCollege(college).then(newCollege => {
      alert("updated college!");
      setCollege(newCollege);
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Alert variant="primary">
        <Alert.Heading>Welcome to your college page!</Alert.Heading>

        <hr />
        <p>
          Here you can edit your college's information.
        </p>
      </Alert>
      <hr />
      <Row className="mb-3">
        <h2> Your college's information</h2>
        <Form.Group as={Col} >
          <Form.Label>College Name</Form.Label>
          <Form.Control id="name" value={college.name} onChange={handleObjChange} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>College Website</Form.Label>
          <Form.Control id="url" value={college.url} onChange={handleObjChange} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>In-State Cost</Form.Label>
          <Form.Control id="inStateCost" value={college.inStateCost} onChange={handleObjChange} />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Out-State Cost</Form.Label>
          <Form.Control id="outStateCost" value={college.outStateCost} onChange={handleObjChange} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Address</Form.Label>
          <Form.Control id="address" value={college.location.address} onChange={event => setCollege({
            ...college,
            location: {
              address: event.target.value,
              latitude: 0,
              longitude: 0
            },
          })} />
        </Form.Group>
      </Row>
      <hr />
      <Form.Label>Photos</Form.Label>

      <Row className="mb-3">
        <Form.Group as={Col} >

          <Form.Text className="text-muted">
            URL:
          </Form.Text>

          <Form.Control id="url" value={url} onChange={handleURLChange} />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Text className="text-muted">
            Add:
          </Form.Text>
          <br></br>

          <Button variant="dark" type="text" onClick={addURL}>
            +
          </Button>
        </Form.Group>
        <div>
          {college.photos.map(i => <img src={i} width="400px" height="auto" />)}
        </div>
        
      </Row>
      <hr />
      <Row>
        <Col>
        <h1>This is what your card looks like:</h1>
        <div style={{width: "33%"}}><CollegeFrame college={college} /></div>
        </Col>
      </Row>
      <hr />


      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
} 