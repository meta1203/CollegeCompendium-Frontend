import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useAPI from "./useAPI";
import CollegeFrame from "./parts/CollegeFrame";

export default function Search(props) {
  const {
    user
  } = useAPI();

  return (
    <>
      {<Row>
        {user.favoriteColleges.map(college =>
          <Col key={college.id} xs="12" md="6" lg="4" style={{paddingBottom: "12px"}}>
            <CollegeFrame college={college} />
          </Col>)}
      </Row>}
    </>
  );
}