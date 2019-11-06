import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./addForm";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    const { loc } = this.props;
    console.log(loc);

    let newState = loc.map(todo => {
      let obj = {};
      obj.id = todo[0];
      obj.content = todo[1];
      return obj;
    });
    console.log(newState);
    this.setState({ todos: newState });
    console.log(this.state);
  }

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
    localStorage.removeItem(id);
    console.log(localStorage);
  };
  addTodo = todo => {
    todo.id = todo.content + Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
    localStorage.setItem(todo.id, todo.content);
    console.log(localStorage);
  };

  render() {
    console.log(this.props);
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
