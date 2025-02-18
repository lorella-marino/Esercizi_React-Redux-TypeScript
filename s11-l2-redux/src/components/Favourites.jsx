import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeFav } from "../redux/actions";
import { Trash3 } from "react-bootstrap-icons";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  return (
    <Container>
      <h2 className="my-4">Aziende Preferite</h2>
      {favourites.length > 0 ? (
        <ListGroup>
          {favourites.map((company) => (
            <ListGroup.Item key={company} className="d-flex justify-content-between align-items-center">
              <Link to={`/company/${company}`}>{company}</Link>
              <Trash3 variant="danger" onClick={() => dispatch(removeFav(company))}>
                Rimuovi
              </Trash3>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>Nessuna azienda nei preferiti.</p>
      )}
    </Container>
  );
};

export default Favourites;
