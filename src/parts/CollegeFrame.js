import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useAPI from '../useAPI';
import { Button } from 'react-bootstrap';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useEffect, useState } from 'react';

const centerCrop = {
  objectFit: "cover",
  objectPosition: "center",
  maxHeight: "33vh",
  width: "100%"
};

export default function CollegeFrame(props) {
  const {
    user,
    isFavorite,
    toggleFavorite,
    searchCollegeForId
  } = useAPI();

  const [ college, setCollege ] = useState(props.college);
  useEffect(() => {
    if ((typeof college) === "string")
      searchCollegeForId(college).then(c => setCollege(c));
  }, []);
  return <Card>
    <ListGroup variant='flush'>
      <ListGroup.Item>
        <Row>
          <Col xs="10">
            <h2>{college.name}</h2>
          </Col>
          <Col xs="2">
            {(typeof user.approved) === "undefined" ? 
            <Button style={{width: "100%"}} onClick={() => toggleFavorite(college.id)}>
              {isFavorite(college.id) ? 
              <MdFavorite />
              :
              <MdFavoriteBorder />
              }
            </Button>
            : undefined}
          </Col>
        </Row>
      </ListGroup.Item>
      {college.photos && college.photos.length > 0 ?
        <ListGroup.Item className="p-0">
          {college.url ?
            <a href={college.url}>
              <img src={college.photos[0]} style={centerCrop} />
            </a>
            :
            <img src={college.photos[0]} style={centerCrop} />
          }
        </ListGroup.Item>
        : undefined
      }

      <ListGroup.Item><a href={college.url}>{college.url}</a></ListGroup.Item>
      <ListGroup.Item>{college.description}</ListGroup.Item>
      <ListGroup.Item>{college.location ? college.location.address : undefined}</ListGroup.Item>
      <ListGroup.Item>{college.phoneNumber}</ListGroup.Item>
    </ListGroup>
  </Card>;
}