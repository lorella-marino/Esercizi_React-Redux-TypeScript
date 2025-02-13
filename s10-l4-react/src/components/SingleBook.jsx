import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleBook = ({ libro, selectedAsin, onSelectBook }) => {
  const selected = selectedAsin === libro.asin;

  return (
    <Col xs={12} md={6} lg={4} xl={3}>
      <Card
        style={{
          width: "100%",
          height: "100%",
          border: selected ? "3px solid aqua" : "1px solid lightgray",
          cursor: "pointer",
        }}
      >
        <Card.Img
          variant="top"
          src={libro.img}
          style={{ objectFit: "cover", height: "18rem" }}
          onClick={() => onSelectBook(libro.asin)}
        />
        <Card.Body>
          <Card.Title className="fs-6">{libro.title}</Card.Title>
          <Card.Text>{libro.price}</Card.Text>
          <Button variant="info">Acquista</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
