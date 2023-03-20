import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
    <div className='title'>
      <h1>To do List ツ</h1>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
