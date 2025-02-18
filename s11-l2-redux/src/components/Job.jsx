import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);
  const isFav = favourites.includes(data.company_name);

  const handleFavClick = () => {
    if (isFav) {
      dispatch(removeFav(data.company_name));
    } else {
      dispatch(addFav(data.company_name));
    }
  };

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={1} variant="link" onClick={handleFavClick}>
        {isFav ? <HeartFill color="red" /> : <Heart color="black" />}
      </Col>
    </Row>
  );
};

export default Job;
