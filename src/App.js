import React from 'react';
import TodoInput from './components/todoInput.js';
import Todos from './components/todos.js';

function App() {
  return (
    <div className=" ml-32 mt-16 mr-32">
      <h1 className=" ml-96 mt-7  text-2xl text-blue-600 font-bold">To Do App</h1>
      <TodoInput/>
      <Todos/>
    </div>
  );
}

export default App;
