import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
import useAPI from '../useAPI';

export default function (props) {
    const {
        user
    } = useAPI()

    const [url, setUrl] = useState('');
    const [images, setImages] = useState([]);

    function addURL(){
        setImages([...images, url]);
        setUrl('');
    }
    function handleURLChange(event){
        setUrl(event.target.value);
    }

    const [currentUser, setCurrentUser] = useState({
        email: user.email,
        firstName: user.firstName,
        middleInitial: user.middleInitial,
        lastName: user.lastName,
        username: user.username,
        city: user.city,
        state: user.state,
      });

      function handleCollegeChange(event) {
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
      }

    return (
     <Form onSubmit={handleSubmit}>
        <Alert variant="primary">
            <Alert.Heading>Welcome to your college page!</Alert.Heading>
            
            <hr/>
            <p>
            Here you can edit your college's information.
            </p>
        </Alert>
        <hr/>
      <Row className="mb-3">
        <h2> Your college's information</h2>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>College Name</Form.Label>
          <Form.Control id="name"/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>College Website</Form.Label>
          <Form.Control id="website" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>In-State Cost</Form.Label>
          <Form.Control id="inStateCost"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Out-State Cost</Form.Label>
          <Form.Control id="outStateCost"/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Address</Form.Label>
          <Form.Control id="address" />
        </Form.Group>
      </Row>
      <hr/>
      <Form.Label>Photos</Form.Label>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          
          <Form.Text className="text-muted">
            URL:
          </Form.Text>
          
          <Form.Control id="url" value={url} onChange={handleURLChange} />
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridName">
        <Form.Text className="text-muted">
            Add:
          </Form.Text>
          <br></br>

            <Button variant="dark" type="text" onClick={addURL}>
        +
        </Button>
        </Form.Group>
        <div>
            {images.map(i => <img src={i} width="400px" height="auto"/>)}
        </div>
        
      </Row>
      <hr/>
      

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    );
} 