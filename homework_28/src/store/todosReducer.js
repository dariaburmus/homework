const initialState = [
  { id: "initial-task-1", task: "Initial Task 1", completed: false },
  { id: "initial-task-2", task: "Initial Task 2", completed: false },
];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_COMPLETE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case "CREATE_TODO":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todosReducer;
