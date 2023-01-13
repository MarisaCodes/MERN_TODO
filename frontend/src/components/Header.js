const Header = ({ count }) => {
  return (
    <header className="home-header">
      <h1>MERN TODO App</h1>
      <div>you have {count} todos to complete</div>
    </header>
  );
};

export default Header;
