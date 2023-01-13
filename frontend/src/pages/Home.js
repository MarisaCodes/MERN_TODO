import AddTodo from "../components/AddTodo";
import Header from "../components/Header";

const Home = () => {
  return (
    <main className="home-wrapper">
      <Header />
      <section className="todos">
        <section className="todo">
          <div className="title">Example todo title</div>
          <div className="body">Example todo details</div>
          <br />
          <hr />
          <div className="time">Last updated: dd/mm/yy ab:cd pm</div>
          <br />
          <div className="options">
            <button className="edit">edit</button>
            <button className="delete">delete</button>
          </div>
        </section>
      </section>
      <AddTodo />
    </main>
  );
};

export default Home;
