import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw Error("useTodoContext used outside of its context provider");
  } else {
    return context;
  }
};

export default useTodoContext;
