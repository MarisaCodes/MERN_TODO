import { useState } from "react";
import handleAddTodo from "../handlers/handleAddTodo";

const AddTodo = ({ dispatch }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  return (
    <form
      onSubmit={(e) =>
        handleAddTodo(e, title, body, dispatch, setTitle, setBody, setError)
      }
    >
      <input
        type="text"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Todo..."
        required
      />
      <input
        type="text"
        id="author"
        onChange={(e) => setBody(e.target.value)}
        value={body}
        placeholder="Extra details..."
      />
      <input type="submit" value="Add todo" />
      {error && <div>{error}</div>}
    </form>
  );
};

export default AddTodo;
