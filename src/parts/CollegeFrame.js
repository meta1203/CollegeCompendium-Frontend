import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function CollegeFrame(props) {
  const { collegeObj } = props;
  return <Card>
    <ListGroup variant='flush'>
      <ListGroup.Item><b>{collegeObj.name}</b></ListGroup.Item>
      {collegeObj.photos && collegeObj.photos.length > 0 ?
        <ListGroup.Item><img src={collegeObj.photos[0]} style={{width: "100%", height: "100%"}}/></ListGroup.Item>
        : undefined
      }
      <ListGroup.Item><p>{collegeObj.description}</p></ListGroup.Item>
    </ListGroup>
  </Card>;
}