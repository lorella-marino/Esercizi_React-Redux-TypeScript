import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { fetchJobs } from "../redux/actions";

const CompanySearchResults = () => {
  const dispatch = useDispatch();
  const { companyName } = useParams();
  const jobs = useSelector((state) => state.company.jobs);

  useEffect(() => {
    if (companyName) {
      dispatch(fetchJobs(companyName));
    }
  }, [companyName, dispatch]);

  return (
    <Container>
      <h2 className="my-4">Offerte di {companyName}</h2>
      <Row>
        <Col>
          {jobs.length > 0 ? (
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)
          ) : (
            <p>Nessun risultato trovato.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
