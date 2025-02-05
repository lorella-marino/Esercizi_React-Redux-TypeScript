import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SingleBook({ libro }) {
  return (
    <Col xs={12} md={6} lg={4} xl={3}>
      <Card style={{ width: "100%", height: "100%" }}>
        <Card.Img variant="top" src={libro.img} style={{ objectFit: "cover", height: "25rem" }} />
        <Card.Body>
          <Card.Title className="fs-6">{libro.title}</Card.Title>
          <Card.Text> {libro.price} </Card.Text>
          <Button variant="primary">Acquista</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;
