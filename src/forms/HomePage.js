import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import useAPI from '../useAPI';

export default function (props) {
    const { user } = useAPI();
    return(
        /*
        <Row className="mb-3">
        <h1>Ready to take your important next step in life?</h1>
        <p>Let us help you</p>
        <p>Your name is {user.firstName} {user.lastName}.</p>
        <p>You are registered as a {user.highschool ? "student" : "college administrator"}.</p>
        </Row>
        */

        <Card className="text-center">
        <Card.Header>Ready to take your next step in life?</Card.Header>
        <Card.Body>

        <Image
        src="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        thumbnail
        />
        <Card.Title>Let us help you out!</Card.Title>
        </Card.Body>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Manage your profile</Card.Title>
        <Card.Text>
          Make sure colleges have up-to-date information
        </Card.Text>
        <Button variant="primary">My Profile</Button>
      </Card.Body>
    </Card>
        <Card.Footer className="text-muted"></Card.Footer>
        </Card>
    );
}
