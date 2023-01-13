import { Link } from "react-router-dom";
import handleDeleteTodo from "../handlers/handleDeleteTodo";

const Todos = ({ todos, dispatch, setError }) => {
  return (
    <section className="todos">
      {todos &&
        todos.map((todo) => (
          <section className="todo" key={todo._id}>
            <div className="title">{todo.title}</div>
            {todo.body && <div className="body">{todo.body}</div>}
            <br />
            <hr />
            <div className="time">Last updated: {todo.updatedAt}</div>
            <br />
            <div className="options">
              <Link className="edit" to={`/edit/${todo._id}`}>
                edit
              </Link>
              <button
                className="delete"
                onClick={() =>
                  handleDeleteTodo(todo._id, todos, dispatch, setError)
                }
              >
                delete
              </button>
            </div>
          </section>
        ))}
    </section>
  );
};

export default Todos;
