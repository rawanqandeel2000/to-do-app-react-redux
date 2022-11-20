const initialState ={
    todos:[],
};

const reducer = (state = initialState, action) => 
{
    switch(action.type){
        case 'ADD_TODO':
            return{
                ...state,
                todos : [...state.todos, action.payload],
            };
            case 'DELETE_ALL':
                return{ 
                    ...state,
                    todos:[],
                };
            case 'DELETE_TODO':
                return{
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
                };
            case 'EDIT_TODO':
                const indexU =state.todos.findIndex(todo => todo.id === action.todo.id)
                const updated = {...action.todo, course:state[indexU].course}
                return[
                    ...state.slice(0,indexU),
                    updated,
                    ...state.slice(indexU+1),
                ]
            default:
                return state;
    }
}
export default reducer;