import {useSelector} from 'react-redux';
const Todos = () => {
  const todos = useSelector(state => state.todos);
  if (!todos || !todos.length) {
    return <p className='text-lg text-red-400 font-bold'>NO TO DO</p>
  }
  return (
    <ul>
      {todos.map(todo => <div
        className="children-checkbox border-transparent bg-white ml-14 mr-14 mb-2 p-3">
        <li>
          <input
            className=" check-with-label border-slate-300 font-bold shadow-md"
            type="checkbox"
            id="idinput"/>
          <label
            className="label-for-check ml-2 text-red-700 font-semibold"
            for="idinput">{todo.title}<br/></label>
          {todo.description}
        </li>
      </div>)}
    </ul>

  )
};
export default Todos;