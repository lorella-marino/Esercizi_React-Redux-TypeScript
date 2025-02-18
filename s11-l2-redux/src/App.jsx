import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import MyNav from "./components/MyNav";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import Favourites from "./components/Favourites";

function App() {
  return (
    <Router>
      <MyNav />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/company/:companyName" element={<CompanySearchResults />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
