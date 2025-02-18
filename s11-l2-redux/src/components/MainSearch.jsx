import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/company/${query.trim()}`);
    }
  };

  return (
    <Container>
      <h1 className="mb-4">Cerca Aziende</h1>
      <Form onSubmit={handleSearch}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Inserisci il nome dell'azienda"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default MainSearch;
