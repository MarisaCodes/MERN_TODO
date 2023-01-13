const handlePatchTodo = (e, id, title, body, navigate, setError) => {
  e.preventDefault();
  const newTodo = JSON.stringify({ title, body });

  fetch(`/api/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: newTodo,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw Error(res.status + " " + res.statusText);
      }
    })
    .catch((err) => setError(err.message))
    .then(() => {
      navigate("/");
    });
};
export default handlePatchTodo;
