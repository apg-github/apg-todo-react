import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const list = todos.length ? (
    todos.map(todo => {
      return (
        <div
          className="collection-item z-depth-1 lighten-3"
          key={todo.id}
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          <span
            className="noselect"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
            <a href="/" className="right tick">
              <i className="fa fa-check"></i>
            </a>
          </span>
        </div>
      );
    })
  ) : (
    <p className="todos center collection-item noselect"> You have no todos </p>
  );
  return <div className="todos collection z-depth-1">{list}</div>;
};

export default Todos;
