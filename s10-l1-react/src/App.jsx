import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import fantasy from "./assets/books/fantasy.json";
import { Container } from "react-bootstrap";
import Loading from "./components/Loading";
import Error from "./components/Error";
import CommentArea from "./components/CommentArea";
import { Component } from "react";

class App extends Component {
  state = {
    loading: true,
    error: false,
    selectedAsin: null,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  BookListError = () => {
    this.setState({ error: true });
  };

  selectBook = (asin) => {
    this.setState({ selectedAsin: asin });
  };

  render() {
    return (
      <div>
        <MyNav />
        <Container className="text-center">
          {this.state.loading && <Loading />}
          {this.state.error && <Error />}
        </Container>
        {!this.state.loading && !this.state.error && (
          <>
            <Welcome />
            <BookList lista={fantasy} onSelectBook={this.selectBook} onError={this.BookListError} />
            <CommentArea asin={this.state.selectedAsin} />
            <MyFooter />
          </>
        )}
      </div>
    );
  }
}

export default App;
