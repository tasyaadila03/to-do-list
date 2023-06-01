const initialState = {
  todos: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)),
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo)),
      };
    default:
      return state;
  }
};

export default rootReducer;
