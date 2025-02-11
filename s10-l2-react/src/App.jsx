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
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [error, setError] = useState(false);

  const BookListError = () => {
    setError(true);
  };

  const [selectedAsin, setSelectedAsin] = useState(null);

  const selectBook = (asin) => {
    setSelectedAsin(asin);
  };

  return (
    <div>
      <MyNav />
      <Container className="text-center">
        {loading && <Loading />}
        {error && <Error />}
      </Container>
      {!loading && !error && (
        <>
          <Welcome />
          <BookList lista={fantasy} onSelectBook={selectBook} onError={BookListError} />
          <CommentArea asin={selectedAsin} />
          <MyFooter />
        </>
      )}
    </div>
  );
};

export default App;
