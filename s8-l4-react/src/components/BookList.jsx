import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BarraRicerca from "./BarraRicerca";

function BookList({ lista }) {
  return (
    <Container className="p-5 m-auto">
      <BarraRicerca />
      <Row className="g-4">
        {lista.map((libro) => (
          <SingleBook key={libro.asin} libro={libro} />
        ))}
      </Row>
    </Container>
  );
}

export default BookList;
