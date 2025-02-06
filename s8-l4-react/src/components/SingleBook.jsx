import { Component } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleCardClick = () => {
    this.setState((prevState) => ({ selected: !prevState.selected }));
  };

  render() {
    const { libro } = this.props;
    const { selected } = this.state;

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
            style={{ objectFit: "cover", height: "25rem" }}
            onClick={this.handleCardClick}
          />
          <Card.Body>
            <Card.Title className="fs-6">{libro.title}</Card.Title>
            <Card.Text>{libro.price}</Card.Text>
            <Button variant="info">Acquista</Button>
          </Card.Body>
          {selected && <CommentArea asin={libro.asin} />}
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
