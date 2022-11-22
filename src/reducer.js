const initialState = {
  todos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ]
      };
    case 'DELETE_ALL':
      return {
        ...state,
        todos: []
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state
          .todos
          .filter(todo => todo.id !== action.payload)
      };
    case 'EDIT_TODO':
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...state,
            todos: action.payload.todo
          }
        }
      })
    default:
      return state;
  }
}
export default reducer;