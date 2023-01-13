import TodoContextProvider from "./contexts/TodoContext";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Home />
      </TodoContextProvider>
      <footer>Copyright &copy; 2023</footer>
    </div>
  );
}

export default App;
