import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { useState } from "react";

const BarraRicerca = () => {
  const [titolo, setTitolo] = useState("");
  return (
    <Form>
      <Container className="mb-5 d-flex justify-content-center">
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Scrivi il titolo"
              className=" mr-sm-2"
              value={titolo}
              onChange={(e) => setTitolo(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" variant="dark">
              Cerca
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default BarraRicerca;
