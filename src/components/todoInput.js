import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

const TodoInput = () => {
  const dispatch = useDispatch();
  const [titleTodo,
    setTitletodo] = useState();
  const [descriptionTodo,
    setDescriptionTodooo] = useState();

  const handleChangetitle = event => setTitletodo(event.target.value);
  const handleChangeedes = event => setDescriptionTodooo(event.target.value);
  const handleClick = () => dispatch({
    type: 'ADD_TODO',
    payload: {
      title: titleTodo,
      description: descriptionTodo,
      id: Math.ceil(Math.random() * 100)
    }
  });
  

  const handleDeleteAll = () => dispatch({type: 'DELETE_ALL'});

  return (
    <div className=''>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
      <input
        value={titleTodo}
        onChange={handleChangetitle}
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      <br/>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
      <input
        value={descriptionTodo}
        onChange={handleChangeedes}
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      <br/>
      <button
        onClick={handleClick}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
      <button
        onClick={handleDeleteAll}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-4">Delete All</button>
    </div>
  )
}

export default TodoInput;