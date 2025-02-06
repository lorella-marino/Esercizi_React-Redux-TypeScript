import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    comments: [],
    errMsg: null,
    isLoading: false,
  };

  componentDidMount() {
    if (this.props.asin) {
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
        throw new Error("Errore");
      }
      const data = await response.json();
      this.setState({ comments: data, isLoading: false });
    } catch (error) {
      this.setState({ errMsg: error.message, isLoading: false });
    }
  };

  addComment = (newComment) => {
    this.setState((prevState) => ({ comments: [...prevState.comments, newComment] }));
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
        throw new Error("Commento non cancellato");
      }
      this.setState((prevState) => ({ comments: prevState.comments.filter((comment) => comment._id !== commentId) }));
    } catch (error) {
      this.setState({ errMsg: error.message });
    }
  };

  render() {
    const { comments, errMsg, isLoading } = this.state;

    if (isLoading) {
      return <Loading isLoading={isLoading} />;
    }

    if (errMsg) {
      return <Error errMsg={errMsg} />;
    }

    return (
      <div className="container">
        <h5>Commenti</h5>
        <CommentsList comments={comments} onDelete={this.deleteComment} />
        <AddComment asin={this.props.asin} addComment={this.addComment} />
      </div>
    );
  }
}

export default CommentArea;
