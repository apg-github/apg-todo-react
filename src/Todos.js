import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const list = todos.length ? (
    todos.map(todo => {
      return (
        <div
          className="collection-item"
          key={todo.id}
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
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
