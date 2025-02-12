import { useState } from "react";

const AddComment = ({ asin, addComment }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);

  const inputChange = (e) => {
    const { name, value } = e.target;
    name === "comment" ? setComment(value) : setRate(value);
  };

  const invio = async (e) => {
    e.preventDefault();
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
          elementId: asin,
        }),
      });

      if (!response.ok) {
        throw new Error("Commento non salvato");
      }

      const newComment = await response.json();
      addComment(newComment);
      setComment("");
      setRate(1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="text-center mt-5" onSubmit={invio}>
      <div>
        <input
          className="border border-secondary rounded-2"
          type="text"
          name="comment"
          value={comment}
          onChange={inputChange}
          placeholder=" Scrivi un commento"
          required
        />
        <select
          className="ms-2 bg-info border-3 border-info rounded-2 text-white"
          name="rate"
          value={rate}
          onChange={inputChange}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="bg-info border-0 rounded-2 text-white px-3 my-3">
        Invia
      </button>
    </form>
  );
};

export default AddComment;
