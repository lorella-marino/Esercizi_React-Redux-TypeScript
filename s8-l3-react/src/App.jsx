import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
/* import SingleBook from "./components/SingleBook"; */
import BookList from "./components/BookList";
import history from "./assets/books/history.json";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      {/* <SingleBook libro={history[2]} /> */}
      <BookList lista={history} />
      <MyFooter />
    </div>
  );
}

export default App;
