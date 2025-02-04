import fantasy from "../assets/books/fantasy.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function AllTheBooks() {
  return (
    <Container className="p-5 m-auto">
      <Row className="g-4">
        {fantasy.map((libro) => {
          return (
            <Col xs={12} md={6} lg={4} xl={3} key={libro.id}>
              <Card style={{ width: "100%", height: "100%" }}>
                <Card.Img variant="top" src={libro.img} style={{ objectFit: "cover", height: "25rem" }} />

                <Card.Body>
                  <Card.Title className="fs-6">{libro.title}</Card.Title>
                  <Card.Text> {libro.price} </Card.Text>
                  <Button className="justify--end" variant="primary">
                    Acquista
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
