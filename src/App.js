import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [ inputText, setInputText ] = useState('');
  const [ todos, setTodos ] = useState([]);
  const [ status, setStatus ] = useState('all');
  const [ filteredTodos, setFilteredTodos ] = useState([]);
  useEffect(() => {
   filterHandler();
  }, [todos, status]);
  const filterHandler = () => {
    let isCompleted;
    if (status === 'completed') {
      isCompleted = true;
    }
    if (status === 'uncompleted') {
      isCompleted = false;
    }
    if (isCompleted !== undefined) {
      setFilteredTodos(
        todos.filter(todo => todo.completed === isCompleted)
      )
    } else {
      setFilteredTodos(todos);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Adam's TODO List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
