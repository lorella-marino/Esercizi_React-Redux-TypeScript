import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { Article } from "./Article";
import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";

const Homepage = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((response) => response.json())
      .then((data: { results: Article[] }) => setArticles(data.results))
      .catch((error) => console.error("Errore nel caricamento degli articoli", error));
  }, []);

  return (
    <Container>
      <MyNavbar />
      <Row xs={3} lg={5} className="g-3">
        {articles.map((article) => (
          <Col key={article.id} className="d-flex">
            <ArticleCard article={article} />
          </Col>
        ))}
      </Row>
      <MyFooter />
    </Container>
  );
};

export default Homepage;
