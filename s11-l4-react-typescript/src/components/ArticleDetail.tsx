import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Article } from "./Article";
import { Card, Container } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import { BiLoader } from "react-icons/bi";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
        .then((response) => response.json())
        .then((data: Article) => setArticle(data))
        .catch((error) => console.error("Errore nel caricamento dell'articolo", error));
    }
  }, [id]);

  if (!article)
    return (
      <p>
        <BiLoader />
      </p>
    );

  return (
    <Container>
      <MyNavbar />
      <Card border="0" className="mb-5 h-100">
        <Card.Img
          variant="top"
          src={article.image_url}
          alt={article.title}
          style={{ objectFit: "cover", height: "18rem" }}
          className="rounded-2"
        />
        <Card.Body>
          <Card.Title className="fs-2">{article.title}</Card.Title>
          <p>
            <strong>Autore:</strong> {article.authors.length > 0 ? article.authors.map((a) => a.name) : "Sconosciuto"}
          </p>
          <Card.Text>{new Date(article.published_at).toLocaleDateString()}</Card.Text>
          <Card.Text>{article.summary}</Card.Text>
        </Card.Body>
      </Card>
      <MyFooter />
    </Container>
  );
};

export default ArticleDetail;
