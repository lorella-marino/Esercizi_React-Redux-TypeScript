import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Nav.Link as={Link} to="/" className="fs-2 text-danger fw-bold my-3">
      Spaceflight
    </Nav.Link>
  );
};

export default MyNavbar;
