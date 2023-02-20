import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import md5 from "md5";

export default function Header(props) {
    return (
        <Navbar className="main-header" variant="dark" bg="dark">
            <Container fluid className="justify-content-end">
                <Image
                    style={{ height: "40px" }}
                    roundedCircle={true}
                    src={"https://www.gravatar.com/avatar/" + md5("hancock.hunter@gmail.com")}
                />
            </Container>
        </Navbar>
    );
}