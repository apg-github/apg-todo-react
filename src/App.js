import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./addForm";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy some milk" },
      { id: 2, content: "Vacuum" },
      { id: 3, content: "Buy some new extra stuff!" },
      { id: 4, content: "Prepare to the exams" },
      { id: 5, content: "Bartek" }
    ]
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };
  addTodo = todo => {
    todo.id = todo.content + Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center #ffab91 deep-orange lighten-3 z-depth-2">
          <span className="">Todo's</span>
        </h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
