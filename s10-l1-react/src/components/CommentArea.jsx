import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin && this.props.asin) {
      this.fetchComments();
    }
  }

  fetchComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjRjOGI3NDcwMTAwMTU4YjJiNGIiLCJpYXQiOjE3Mzg4NTQ5NzksImV4cCI6MTc0MDA2NDU3OX0.NKfInOqwf2Lqt9HCmavA31uvs3XhlQ-ja6TT79PdpjU",
        },
      });
      if (!response.ok) {
        throw new Error("Errore nel caricamento dei commenti");
      }
      const data = await response.json();
      this.setState({ comments: data });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  addComment = (newComment) => {
    this.setState((prevState) => ({
      comments: [...prevState.comments, newComment],
    }));
  };

  deleteComment = async (commentId) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjRjOGI3NDcwMTAwMTU4YjJiNGIiLCJpYXQiOjE3Mzg4NTQ5NzksImV4cCI6MTc0MDA2NDU3OX0.NKfInOqwf2Lqt9HCmavA31uvs3XhlQ-ja6TT79PdpjU",
        },
      });
      if (!response.ok) {
        throw new Error("Errore nell'eliminazione del commento");
      }
      this.setState((prevState) => ({
        comments: prevState.comments.filter((comment) => comment._id !== commentId),
      }));
    } catch (error) {
      console.error("Errore nell'eliminazione del commento", error);
    }
  };

  render() {
    const { comments } = this.state;

    return (
      <div className="container">
        <h5>Commenti</h5>
        {this.props.asin ? (
          <>
            <CommentsList comments={comments} onDelete={this.deleteComment} />
            <AddComment asin={this.props.asin} addComment={this.addComment} />
          </>
        ) : (
          <p>Seleziona un libro per vedere i commenti.</p>
        )}
      </div>
    );
  }
}

export default CommentArea;
