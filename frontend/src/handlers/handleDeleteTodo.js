const handleDeleteTodo = (id, todos, dispatch, setError) => {
  fetch(`/api/todos/${id}`, { method: "DELETE" })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw Error(res.status + " " + res.statusText);
      }
    })
    .catch((err) => setError(err.message))
    .then((data) => {
      if (data) {
        if (data.error) {
          throw Error(data.error);
        } else {
          const newTodos = todos.filter((todo) => todo._id !== data._id);
          dispatch({ type: "DELETE_TODO", payload: newTodos });
          setError(null);
        }
      }
    })
    .catch((err) => setError(err.message));
};

export default handleDeleteTodo;
