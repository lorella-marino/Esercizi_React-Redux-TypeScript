import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const { companyName } = useParams();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await fetch(`${baseEndpoint}${companyName}`);
        if (!response.ok) {
          throw new Error("Errore nel recupero dei dati");
        }
        const { data } = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Errore nel recupero dei risultati:", error);
      }
    };
    if (companyName) getJobs();
  }, [companyName]);

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
