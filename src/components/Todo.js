import React from "react";

const Todo = ({ todo, text, todos, setTodos }) => {
  // const todoIndex = todos.findIndex(el => el.id );
  // todos.splice(todoIndex, 1);
  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id));
  }
  const completeHandler = () => {
    setTodos(todos.map(el => {
      if (el.id === todo.id) {
        return {
          ...el, completed: !el.completed
        }
      }
      return el;
    }))
  }
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className="completed-button"><i className="fas fa-check"></i></button>
      <button onClick={deleteHandler} className="trash-button"><i className="fas fa-trash"></i></button>
    </div>
  );
}

export default Todo;