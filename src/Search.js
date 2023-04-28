import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import useAPI from "./useAPI";
import { useState, useEffect } from "react";
import CollegeFrame from "./parts/CollegeFrame";
import LookupBox from "./parts/LookupBox";

export default function Search(props) {
  const {
    user,
    searchCollegesNearby,
    searchMajorsForName,
    searchCollegeForMajor,
    searchCollegeForName,
  } = useAPI();

  function distanceFromUser(c) {
    return Math.sqrt(
      Math.pow(c.location.latitude - user.location.latitude, 2) +
      Math.pow(c.location.longitude - user.location.longitude, 2)
    );
  }

  const [colleges, setColleges] = useState([]);
  const [distance, setDistance] = useState(0);
  const [major, setMajor] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    let searchProm = null;
    let searchedOn = "";
    if (major) {
      searchProm = searchCollegeForMajor(major);
      searchedOn = "major";
    } else if (name) {
      searchProm = searchCollegeForName(name);
      searchedOn = "name";
    } else if (distance && distance > 0) {
      searchProm = searchCollegesNearby(distance);
      searchedOn = "distance";
    } else {
      searchProm = searchCollegeForName("");
      searchedOn = "name";
    }
    searchProm.then(newColleges => {
      if (distance && distance > 0 && (searchedOn === "major" || searchedOn === "name")) {
        newColleges = newColleges.filter(c => distanceFromUser(c) * 69 < parseFloat(distance));
        newColleges.sort((a, b) => distanceFromUser(a) - distanceFromUser(b));
      }

      setColleges(newColleges);
    });
  }, [distance, major, name]);

  return (
    <>
      <Row>
        <Col xs={3}>
          <Form.Group>
            <Form.Label>College name: </Form.Label>
            <Form.Control id="name" onChange={event => setName(event.target.value)} />
          </Form.Group>
        </Col>
        <Col xs={3}>
          <LookupBox id="major" label="Offers major:"
            receiveChange={majorId => setMajor(majorId)}
            getOptions={async v => {
              const majors = await searchMajorsForName(v);
              return majors.map(m => {
                return { value: m.id, text: m.name };
              });
            }} />
        </Col>
        <Col xs={3}>
          <Form.Group>
            <Form.Label>Max distance (miles): </Form.Label>
            <Form.Control id="miles" type="number" onChange={event => setDistance(event.target.value)} />
          </Form.Group>
        </Col>
      </Row>
      <hr />
      <Row>
        {colleges.map(college =>
          <Col key={college.id} xs="12" md="6" lg="4" style={{ height: "33vh" }}>
            <CollegeFrame college={college} />
          </Col>)}
      </Row>
    </>
  );
}