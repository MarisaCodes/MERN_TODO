const Todos = ({ todos }) => {
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
              <button className="edit">edit</button>
              <button className="delete">delete</button>
            </div>
          </section>
        ))}
    </section>
  );
};

export default Todos;
