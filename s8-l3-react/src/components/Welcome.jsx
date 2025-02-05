import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Welcome() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="info" className="m-0 text-center">
        <Alert.Heading>Welcome!</Alert.Heading>
        <p>Compra tutti i libri che vuoi nel mio shop online!</p>
        <hr />
        <div>
          <Button onClick={() => setShow(false)} variant="outline-secondary">
            Chiudi
          </Button>
        </div>
      </Alert>
    </>
  );
}

export default Welcome;
