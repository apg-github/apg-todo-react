import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const handleMouseOver = e => {};

  const handleMouseLeave = e => {};
  const list = todos.length ? (
    todos.map(todo => {
      return (
        <div
          className="collection-item z-depth-1 lighten-3"
          key={todo.id}
          onClick={() => {
            deleteTodo(todo.id);
          }}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
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
    <p className="todos center collection-item"> You have no todos </p>
  );
  return <div className="todos collection z-depth-1">{list}</div>;
};

export default Todos;
