import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import CollegeFrame from '../parts/CollegeFrame';
import LookupBox from "../parts/LookupBox";
import { BsTrashFill } from "react-icons/bs";

import { useState } from 'react';
import useAPI from '../useAPI';
import { Card, Container, ListGroup } from 'react-bootstrap';

export default function CollegeManagement() {
  const {
    user,
    updateCollege,
    searchMajorsForName,
    searchMajorForId,
  } = useAPI();

  const [college, setCollege] = useState(user.college);
  const [url, setUrl] = useState("");
  const [degree, setDegree] = useState({ creditsRequired: 0, degreeType: "ASSOCIATE" });

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
    let updatedCollege = { ...college };
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

  function handleDegreeChange(event) {
    let updatedDegree = { ...degree };
    console.log(`degree.${event.target.id} -> ${event.target.value}`)
    updatedDegree[event.target.id] = event.target.value;
    console.log(updatedDegree);
    setDegree(updatedDegree);
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

      <Row className="mb-3">
        <Col xs="6">
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <b>Photos</b>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col xs="10" md="11">
                    <Form.Group>
                      <Form.Label>URL:</Form.Label>
                      <Form.Control id="url" value={url} onChange={handleURLChange} />
                    </Form.Group>
                  </Col>

                  <Col xs="2" md="1">
                    <Form.Group>
                      <Form.Label className="text-muted">Add:</Form.Label>
                      <br />
                      <Button variant="dark" type="text" onClick={addURL}>+</Button>
                    </Form.Group>
                  </Col>
                </Row>
              </ListGroup.Item>
              {college.photos.map(i =>
                <ListGroup.Item>
                  <img src={i} width="400px" height="auto" />
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </Col>

        <Col>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <b>Degrees</b>
              </ListGroup.Item>
              <ListGroup.Item>
                <Form>
                  <Row>
                    <Col xs="6">
                      <LookupBox id="major" label="Major"
                        receiveChange={majorId => {
                          searchMajorForId(majorId).then(m =>
                            setDegree({
                              ...degree,
                              major: m
                            }));
                        }}
                        getOptions={async v => {
                          const majors = await searchMajorsForName(v);
                          return majors.map(m => {
                            return { value: m.id, text: m.name };
                          });
                        }} />
                    </Col>
                    <Col xs="3">
                      <Form.Group>
                        <Form.Label forHtml="degreeType">Degree Offered:</Form.Label>
                        <Form.Select id="degreeType" value={degree.degreeType} onChange={handleDegreeChange}>
                          <option value="ASSOCIATE">Associate's</option>
                          <option value="BACHELOR">Bachelor's</option>
                          <option value="MASTER">Master's</option>
                          <option value="DOCTORATE">Doctorate</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs="2">
                      <Form.Group>
                        <Form.Label forHtml="creditsRequired">Credit Hours:</Form.Label>
                        <Form.Control id="creditsRequired" value={degree.creditsRequired} onChange={handleDegreeChange} type="number" />
                      </Form.Group>
                    </Col>
                    <Col xs="1">
                      <Form.Group>
                        <Form.Label>Add:</Form.Label>
                        <Button variant="primary" type="submit"
                          onClick={event => {
                            event.preventDefault();
                            console.log(degree);
                            college.degrees.push({ ...degree });
                            setDegree({});
                            alert("added degree");
                          }}>+</Button>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </ListGroup.Item>
              {college.degrees.map((d, i) =>
                <ListGroup.Item key={i}>
                  <Row>
                    <Col xs="6"><b>{d.major.name}</b></Col>
                    <Col xs="3">{d.degreeType}</Col>
                    <Col xs="2">{d.creditsRequired}</Col>
                    <Col xs="1"><Button variant="danger" onClick={event => {
                      event.preventDefault();
                      let updatedCollege = { ...college };
                      updatedCollege.degrees = college.degrees.filter((v, i2) => i != i2);
                      setCollege(updatedCollege);
                    }}><BsTrashFill /></Button></Col>
                  </Row>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <hr />
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      <hr />
      <Row>
        <Col>
          <h2>This is what your card looks like:</h2>
          <div style={{ width: "33%" }}><CollegeFrame college={college} /></div>
        </Col>
      </Row>
    </Form>
  );
}