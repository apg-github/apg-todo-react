import React, { Component } from "react";

class AddTodo extends Component {
  state = { content: "" };
  handleChange = e => {
    this.setState({ content: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.content) {
      this.props.addTodo(this.state);
    }
    this.setState({ content: "" });
  };
  render() {
    return (
      <div>
        <form
          className="#ffffff white lighten-3 z-depth-1 "
          onSubmit={this.handleSubmit}
        >
          <label className="center">
            <h5 className="noselect">Add new todo:</h5>
          </label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          ></input>
        </form>
      </div>
    );
  }
}

export default AddTodo;
