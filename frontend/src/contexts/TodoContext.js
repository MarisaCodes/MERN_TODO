import { createContext, useReducer } from "react";

export const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        todos: action.payload,
      };
    case "POST_TODO":
      return {
        todos: [action.payload, ...state.todos],
      };
    case "DELETE_TODO":
      return {
        todos: action.payload,
      };
    default:
      return state;
  }
};

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, { todos: null });
  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
