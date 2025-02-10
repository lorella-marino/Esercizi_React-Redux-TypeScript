import { Component } from "react";
import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BarraRicerca from "./BarraRicerca";
import { Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    selectedAsin: null,
  };

  setSelectedAsin = (asin) => {
    this.setState({ selectedAsin: asin });
  };

  render() {
    return (
      <Container className="py-5 m-auto">
        <BarraRicerca />
        <Row>
          <Col>
            <Row className="g-4">
              {this.props.lista.map((libro) => (
                <SingleBook
                  key={libro.asin}
                  libro={libro}
                  onSelectBook={this.setSelectedAsin}
                  selectedAsin={this.state.selectedAsin}
                />
              ))}
            </Row>
          </Col>
          <Col className="col-3">
            <CommentArea asin={this.state.selectedAsin} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
