import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import useAPI from "./useAPI";
import { useState } from "react";
import CollegeFrame from "./parts/CollegeFrame";

export default function Search(props) {
  const {
    searchCollegesNearby
  } = useAPI();
  const [colleges, setColleges] = useState([]);

  function fetchColleges() {
    const milesElem = document.getElementById("miles");
    if (milesElem.value) {
      searchCollegesNearby(milesElem.value).then(newSet => setColleges(newSet));
    }
  }

  return (
    <>
      <Row>
        <Col xs={3}>
          <Form.Group>
            <Form.Label>Max distance (miles): </Form.Label>
            <Form.Control id="miles" type="number" onChange={fetchColleges} />
          </Form.Group>
        </Col>
      </Row>
      <hr />
      <Row>
        {colleges.map(college => 
        <Col key={college.id} xs="12" md="6" lg="4" style={{height: "33vh"}}>
          <CollegeFrame college={college} />
        </Col>)}
      </Row>
    </>
  );
}