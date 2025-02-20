import { Link } from "react-router-dom";
import { Article } from "./Article";
import { Button, Card } from "react-bootstrap";

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Card className="bg-danger mb-3 h-100">
      <Card.Img
        variant="top"
        src={article.image_url}
        alt={article.title}
        style={{ objectFit: "cover", height: "10rem" }}
      />
      <Card.Body className="text-white">
        <Card.Title>{truncateText(article.title, 40)}</Card.Title>
        <Card.Text>{new Date(article.published_at).toLocaleDateString()}</Card.Text>
        <Card.Text>{truncateText(article.summary, 100)}</Card.Text>
        <Button variant="dark" as={Link} to={`/article/${article.id}`}>
          Leggi di più
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
