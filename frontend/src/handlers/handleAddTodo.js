const handleAddTodo = (
  e,
  title,
  body,
  dispatch,
  setTitle,
  setBody,
  setError
) => {
  e.preventDefault();

  const todo = JSON.stringify({ title, body });

  fetch("/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: todo,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw Error("could not add the todo");
      }
    })
    .catch((err) => setError(err.message))
    .then((newTodo) => {
      dispatch({ type: "POST_TODO", payload: newTodo });
      setTitle("");
      setBody("");
      setError(null);
    })
    .catch((err) => setError(err.message));
};

export default handleAddTodo;
