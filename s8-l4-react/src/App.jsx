import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import fantasy from "./assets/books/fantasy.json";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <BookList lista={fantasy} />
      <MyFooter />
    </div>
  );
}

export default App;
