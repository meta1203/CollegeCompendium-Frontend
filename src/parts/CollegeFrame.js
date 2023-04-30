import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const centerCrop = {
  objectFit: "cover",
  objectPosition: "center",
  maxHeight: "33vh",
  width: "100%"
};

export default function CollegeFrame(props) {
  const { college } = props;
  return <Card>
    <ListGroup variant='flush'>
      <ListGroup.Item><h2>{college.name}</h2></ListGroup.Item>
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
      <ListGroup.Item>{college.location.address}</ListGroup.Item>
      <ListGroup.Item>{college.phoneNumber}</ListGroup.Item>
    </ListGroup>
  </Card>;
}