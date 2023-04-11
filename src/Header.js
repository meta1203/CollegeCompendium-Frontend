import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import md5 from "md5";

export default function Header(props) {
    const { user, logout } = useAuth0();
    return (
        <Navbar className="main-header" variant="dark" bg="dark">
            <Container fluid className="justify-content-end">
                <Button variant="link" onClick={() => logout({ returnTo: "https://www.google.com" })} href="#">
                    <Image
                        referrerpolicy="no-referrer"
                        style={{ height: "40px" }}
                        roundedCircle={true}
                        src={
                            user.picture ?
                                user.picture :
                                "https://www.gravatar.com/avatar/" + md5(user.email)
                        }
                    />
                </Button>
            </Container>
        </Navbar>
    );
}