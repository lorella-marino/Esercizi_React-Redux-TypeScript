import { useState } from "react";
import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BarraRicerca from "./BarraRicerca";
import { Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = ({ lista }) => {
  const [selectedAsin, setSelectedAsin] = useState(null);

  return (
    <Container className="py-5 m-auto">
      <BarraRicerca />
      <Row>
        <Col>
          <Row className="g-4">
            {lista.map((libro) => (
              <SingleBook key={libro.asin} libro={libro} onSelectBook={setSelectedAsin} selectedAsin={selectedAsin} />
            ))}
          </Row>
        </Col>
        <Col className="col-3">
          <CommentArea asin={selectedAsin} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
