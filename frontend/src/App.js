import TodoContextProvider from "./contexts/TodoContext";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./pages/Edit";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TodoContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </TodoContextProvider>
      </BrowserRouter>
      <footer>Copyright &copy; 2023</footer>
    </div>
  );
}

export default App;
