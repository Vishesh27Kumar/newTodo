import React, { Component } from "react";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }

  onChangeHandler(event) {
    let inputTask = event.target.value;
    this.setState({ task: inputTask });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.saveTodo(this.state.task);
    this.setState({ task: "" });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler.bind(this)}>
        <input
          type="text"
          value={this.state.task}
          placeholder="What needs to be done?"
          onChange={this.onChangeHandler.bind(this)}
          autoFocus
        />
      </form>
    );
  }
}

export default index;
