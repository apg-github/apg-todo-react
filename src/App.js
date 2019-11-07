import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./addForm";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    const { loc } = this.props;

    let newState = loc.map(todo => {
      let obj = { id: todo[0], content: todo[1] };
      //obj.id = todo[0];
      //obj.content = todo[1];
      return obj;
    });

    this.setState({ todos: newState });
  }

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos
    });

    localStorage.removeItem(id);
  };
  addTodo = todo => {
    todo.id = new Date().getTime();
    let todos = [...this.state.todos, todo];

    this.setState({
      todos
    });

    localStorage.setItem(todo.id, todo.content);
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center #ffab91 #4db6ac teal lighten-3  z-depth-2">
          <span className="">Todo's</span>
        </h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
