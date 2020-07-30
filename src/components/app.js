import React from "react";

import TodoList from "./todoList.jsx";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        task: "",
        isCompleted: false,
      },
      todos: [],
    };
  }

  componentDidMount() {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      this.setState({ todos });
    }
  }

  handleChange(event) {
    let todo = event.target.value;
    this.setState({ todo: { task: todo, isCompleted: false } });
  }

  handleSubmit() {
    event.preventDefault(); // stops unnecessary reloading of the page

    let previousState = this.state;

    if (previousState.todo.task === "") return; // check if entered string is empty or not

    this.setState(
      {
        todo: { task: "", isCompleted: false },
        todos: [previousState.todo, ...previousState.todos],
      },
      () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
    );
  }

  deleteTodo(index) {
    let currentState = this.state.todos;
    currentState.splice(index, 1);
    this.setState({ todos: currentState }, () => {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    });
  }

  onCheckboxChange(index) {
    let currentState = this.state.todos;
    currentState[index].isCompleted = !currentState[index].isCompleted;
    this.setState({ todos: currentState }, () => {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    });
  }

  render() {
    return (
      <div className="container">
        <h1>ToDO APp</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            onChange={this.handleChange.bind(this)}
            value={this.state.todo.task}
            placeholder="What's next"
          />
          <input type="submit" value="+" />
        </form>
        <TodoList
          list={this.state.todos}
          onDeleteRequest={this.deleteTodo.bind(this)}
          onCheckboxStatusChange={this.onCheckboxChange.bind(this)}
        />
      </div>
    );
  }
}

export default App;
