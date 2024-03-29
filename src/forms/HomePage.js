import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import useAPI from '../useAPI';

export default function (props) {
  const { user } = useAPI();
  console.log(typeof user.approved);
  return (
    /*
    <Row className="mb-3">
    <h1>Ready to take your important next step in life?</h1>
    /<p>Let us help you</p>
    </Row>
    */
   <>
    {
      (typeof user.approved) === "undefined" ?
        <Card className="text-center">
          <Card.Header> {user.firstName}, {user.highschool ? "are you ready to take the next step in your life?" : "are you ready to find amazing students that match your college?"} </Card.Header>
          <Card.Body>

            <Image
              src="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              thumbnail
            />
            <Card.Title>Let us help you out!</Card.Title>
          </Card.Body>
          { /*
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        <Card.Body>
          <Card.Title>Manage your profile</Card.Title>
          <Card.Text>
            Make sure {user.highschool ? "colleges" : "students"} have up-to-date information
          </Card.Text>
          <Button variant="primary">My Profile</Button>
        </Card.Body>
      </Card>
      */ }
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
        :
        <>
          <p>Your name is {user.firstName} {user.lastName}.</p>
          <p>You are registered as a {user.highschool ? "student" : "college administrator"}.</p>
          {user.approved ? undefined : <p>You currently do not have access to the system. Please contact a co-worker to approve your account.</p>}
        </>
    }
    </>
  );
}
