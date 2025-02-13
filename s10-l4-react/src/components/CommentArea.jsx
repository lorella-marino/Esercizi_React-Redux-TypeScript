import { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (asin) {
      fetchComments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asin]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjRjOGI3NDcwMTAwMTU4YjJiNGIiLCJpYXQiOjE3Mzg4NTQ5NzksImV4cCI6MTc0MDA2NDU3OX0.NKfInOqwf2Lqt9HCmavA31uvs3XhlQ-ja6TT79PdpjU",
        },
      });

      if (!response.ok) {
        throw new error("Errore nel caricamento dei commenti");
      }

      const data = await response.json();
      setComments(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const addComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const deleteComment = async (commentId) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjRjOGI3NDcwMTAwMTU4YjJiNGIiLCJpYXQiOjE3Mzg4NTQ5NzksImV4cCI6MTc0MDA2NDU3OX0.NKfInOqwf2Lqt9HCmavA31uvs3XhlQ-ja6TT79PdpjU",
        },
      });

      if (!response.ok) {
        throw new error("Errore nell'eliminazione del commento");
      }

      setComments((prevComments) => prevComments.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.error("Errore nell'eliminazione del commento", error);
    }
  };

  return (
    <div className="container">
      <h5>Commenti</h5>
      {asin ? (
        <>
          <CommentsList comments={comments} onDelete={deleteComment} />
          <AddComment asin={asin} addComment={addComment} />
        </>
      ) : (
        <p>Seleziona un libro per vedere i commenti.</p>
      )}
    </div>
  );
};

export default CommentArea;
