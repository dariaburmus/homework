export const toggleComplete = (id) => {
    return {
      type: "TOGGLE_COMPLETE",
      payload: id,
    };
  };
  
  export const createTodo = (newTodo) => {
    return {
      type: "CREATE_TODO",
      payload: newTodo,
    };
  };
  