import React from 'react'
import "../src/index.css"
import AddTodo from './Components/AddTodo'
import List from './Components/List'

function App() {
  return (
    <div className="main">
      <AddTodo />
      <List />
    </div>
  );
}

export default App;
