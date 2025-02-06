import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { Component } from "react";

class BarraRicerca extends Component {
  state = {
    formValue: {
      titolo: "",
    },
  };
  render() {
    return (
      <Form>
        <Container className="mb-5 d-flex justify-content-center">
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Scrivi il titolo"
                className=" mr-sm-2"
                value={this.state.formValue.titolo}
                onChange={(e) => {
                  this.setState({
                    formValue: {
                      ...this.state.formValue,
                      titolo: e.target.value,
                    },
                  });
                }}
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
  }
}

export default BarraRicerca;
