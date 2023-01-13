import { useEffect, useState } from "react";
import AddTodo from "../components/AddTodo";
import Header from "../components/Header";
import Todos from "../components/Todos";
import useTodoContext from "../hooks/useTodoContext";

const Home = () => {
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const { todos, dispatch } = useTodoContext();

  useEffect(() => {
    fetch("/api/todos", { method: "GET" })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.status + " " + res.statusText);
        }
      })
      .catch((err) => setError(err.message))
      .then((todos) => {
        if (todos) {
          if (todos.error) {
            throw Error(todos.error);
          } else {
            dispatch({ type: "GET_TODOS", payload: todos });
            setCount(todos.length);
          }
        }
      })
      .catch((err) => setError(err.message));
  }, [dispatch]);
  return (
    <main className="home-wrapper">
      <Header count={count} />
      <Todos todos={todos} dispatch={dispatch} setError={setError} />
      {error && <div className="error">{error}</div>}
      <AddTodo dispatch={dispatch} />
    </main>
  );
};

export default Home;
