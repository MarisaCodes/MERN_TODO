import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import handlePatchTodo from "../handlers/handlePatchTodos";

const Edit = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/todos/${id}`, { method: "GET" })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.status + " " + res.statusText);
        }
      })
      .catch((err) => setError(err.message))
      .then((todo) => {
        setTitle(todo.title);
        setBody(todo.body);
        setLoading(true);
      });
  }, [id]);

  return (
    <main className="home-wrapper">
      {loading && (
        <form onSubmit={(e) => handlePatchTodo(e, id, title, body, navigate)}>
          <input
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Todo..."
          />
          <input
            type="text"
            id="author"
            onChange={(e) => setBody(e.target.value)}
            value={body}
            placeholder="Extra details..."
          />
          <input type="submit" value="Add todo" />
          <Link to="/" className="back">
            Back
          </Link>
          {error && <div>{error}</div>}
        </form>
      )}
      {loading || <div className="loading">loading...</div>}
    </main>
  );
};

export default Edit;
