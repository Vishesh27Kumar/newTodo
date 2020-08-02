import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import { Header, Main, Footer } from "../../presentation/index";
import { setTodos, getTodos } from "../../service";

import "./style.css";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      status: this.props.status,
    };

    this.saveTodo = this.saveTodo.bind(this);
    this.changeCheckedAllTodos = this.changeCheckedAllTodos.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.changeCheckedTodo = this.changeCheckedTodo.bind(this);
    this.deleteCompleted = this.deleteCompleted.bind(this);
  }

  saveTodo(task) {
    if (!task) return;
    let newTaskId = uuidv4();
    let newTodo = {
      _id: newTaskId,
      task,
      isCompleted: false,
    };
    this.setState((prevState) => {
      return { todos: [...prevState.todos, newTodo] };
    });
  }

  changeCheckedTodo(event) {
    const id = event.target.id;
    const index = this.state.todos.findIndex((todo) => todo["_id"] === id);

    this.setState(({ todos }) => {
      todos[index].isCompleted = !todos[index].isCompleted;
      return todos;
    });
  }

  changeCheckedAllTodos(event) {
    const checked = event.target.checked;

    if (checked) {
      this.setState(({ todos }) => ({
        todos: todos.map((todo) => {
          todo.isCompleted = true;
          return todo;
        }),
      }));
    } else {
      this.setState(({ todos }) => ({
        todos: todos.map((todo) => {
          todo.isCompleted = false;
          return todo;
        }),
      }));
    }
  }

  deleteTodo(event) {
    const id = event.target.id;
    const index = this.state.todos.findIndex((todo) => todo["_id"] === id);

    this.setState(({ todos }) => {
      todos.splice(index, 1);
      return todos;
    });
  }

  deleteCompleted() {
    const notCompleted = this.state.todos.filter(
      (todo) => todo["isCompleted"] === false
    );

    this.setState({
      todos: notCompleted,
    });
  }

  componentDidMount() {
    const todos = getTodos() || [];
    this.setState({ todos });
  }

  componentDidUpdate(previousProps, previouState) {
    if (previouState !== this.state.todos) {
      const todos = this.state.todos;
      setTodos(todos);
    }
  }

  render() {
    const {
      saveTodo,
      changeCheckedAllTodos,
      deleteTodo,
      changeCheckedTodo,
      deleteCompleted,
    } = this;
    const { status, todos } = this.state;
    return (
      <React.Fragment>
        <h1>todos</h1>
        <div className="container">
          <Header saveTodo={saveTodo} />
          <Main
            todos={todos}
            onDelete={deleteTodo}
            toggleTodo={changeCheckedTodo}
            status={status}
            toggleAllTodos={changeCheckedAllTodos}
          />
          <Footer todos={todos} deleteCompletedHandler={deleteCompleted} />
        </div>
      </React.Fragment>
    );
  }
}

export default index;
