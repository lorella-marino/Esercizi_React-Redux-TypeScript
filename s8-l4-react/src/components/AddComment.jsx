import { Component } from "react";

class AddComment extends Component {
  state = {
    comment: "",
    rate: 1,
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { comment, rate } = this.state;
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjRjOGI3NDcwMTAwMTU4YjJiNGIiLCJpYXQiOjE3Mzg4NTQ5NzksImV4cCI6MTc0MDA2NDU3OX0.NKfInOqwf2Lqt9HCmavA31uvs3XhlQ-ja6TT79PdpjU",
        },
        body: JSON.stringify({
          comment,
          rate: parseInt(rate),
          elementId: this.props.asin,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to post comment");
      }
      const newComment = await response.json();
      this.props.addComment(newComment);
      this.setState({ comment: "", rate: 1 });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <form className="text-center" onSubmit={this.handleSubmit}>
        <input
          className="border border-secondary  rounded-2"
          type="text"
          name="comment"
          value={this.state.comment}
          onChange={this.handleInputChange}
          placeholder=" Scrivi un commento"
          required
        />
        <select
          className=" ms-2 bg-info border-3 border-info rounded-2 text-white"
          name="rate"
          value={this.state.rate}
          onChange={this.handleInputChange}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <button type="submit" className="bg-info border-0 rounded-2 text-white px-3 my-3">
          Invia
        </button>
      </form>
    );
  }
}

export default AddComment;
