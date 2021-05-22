import React, { Component } from 'react';
import ControlTodoView from './ControlTodoView';
import EditForm from './EditForm';
import Form from './Form';
import TodoView from './TodoView';

class Todos extends Component {
  state = {
    form: {
      title: '',
      description: '',
    },
    isEditMode: false,
    edit: {
      editTitle: '',
      editDescription: '',
    },
    view: 'list',
    todos: [
      {
        id: 1,
        title: 'হাতের লিখা',
        description: 'ঈদ এর হাতের লিখা।',
        isComplete: false,
        time: new Date().toLocaleString(),
      },
      {
        id: 2,
        title: 'কোডিং',
        description: '১ ঘন্টা কোডিং করা।',
        isComplete: false,
        time: new Date().toLocaleString(),
      },
    ],
  };

  toggleComplete = (todoID) => {
    const index = this.state.todos.findIndex((todo) => todo.id === todoID);
    let todos = [...this.state.todos];
    let todo = { ...todos[index] };
    todo.isComplete = !todo.isComplete;
    todos[index] = todo;
    this.setState({ todos });
  };

  handleChange = (e) => {
    this.setState((prevState) => {
      let form = { ...prevState.form };
      form[e.target.name] = e.target.value;
      return { form };
    });
  };

  addTodo = (e) => {
    e.preventDefault();

    if (
      this.state.form.title.trim() === '' ||
      this.state.form.description.trim() === ''
    ) {
      alert('blank!');
      return;
    }

    (this.state.form.time = new Date().toLocaleString()),
      (this.state.form.id = Math.round(Math.random() * 1000)),
      (this.state.form.isComplete = false),
      this.state.todos.unshift(this.state.form);

    let todos = [...this.state.todos];
    this.setState({ todos });

    this.setState((prevState) => {
      let form = { ...prevState.form };
      (form.title = ''), (form.description = '');
      return { form };
    });
  };

  deleteTodoItem = (todoID) => {
    const index = this.state.todos.findIndex((todo) => todo.id === todoID);
    let todos = [...this.state.todos];
    if (!todos[index].isComplete) {
      alert('Task is running!');
      return;
    }
    todos.splice(index, 1);
    this.setState({ todos });
  };

  changeView = (e) => {
    this.setState({
      view: e.target.value,
    });
  };

  editedIndex = null;

  editTodoItem = (todoID) => {
    const index = this.state.todos.findIndex((todo) => todo.id === todoID);

    this.setState({
      isEditMode: true,
    });

    this.editedIndex = index;

    this.setState((prevState) => {
      let edit = { ...prevState.edit };
      edit.editTitle = this.state.todos[index].title;
      edit.editDescription = this.state.todos[index].description;
      return { edit };
    });
  };

  handleEditChange = (e) => {
    this.setState((prevState) => {
      let edit = { ...prevState.edit };
      edit[e.target.name] = e.target.value;
      return { edit };
    });
  };

  updateTodo = (e) => {
    e.preventDefault();

    const index = this.editedIndex;
    let todos = [...this.state.todos];
    let todo = { ...todos[index] };

    if (
      !(
        this.state.edit.editTitle.trim() &&
        this.state.edit.editDescription.trim()
      )
    ) {
      alert('blank!');
      return;
    }

    todo.title = this.state.edit.editTitle;
    todo.description = this.state.edit.editDescription;
    todos[index] = todo;
    this.setState({ todos });

    this.setState({
      isEditMode: false,
    });
  };

  cencelEdit = () => {
    this.setState({
      isEditMode: false,
    });
  };

  render() {
    const { todos, form, view, isEditMode, edit } = this.state;
    const { title, description } = form;
    const { editTitle, editDescription } = edit;

    return (
      <>
        <div className="container my-5">
          <h2 className="text-center mb-5">TO DO APP</h2>
          {isEditMode && todos.length !== 0 ? (
            <EditForm
              editTitle={editTitle}
              editDescription={editDescription}
              handleEditChange={this.handleEditChange}
              updateTodo={this.updateTodo}
              cencelEdit={this.cencelEdit}
            />
          ) : (
            <Form
              title={title}
              description={description}
              handleChange={this.handleChange}
              addTodo={this.addTodo}
            />
          )}

          {todos.length === 0 ? (
            ''
          ) : (
            <ControlTodoView view={view} changeView={this.changeView} />
          )}

          {todos.length === 0 ? (
            <h2 className="text-center">Nothing to do!</h2>
          ) : (
            <TodoView
              view={view}
              todos={todos}
              toggleComplete={this.toggleComplete}
              deleteTodoItem={this.deleteTodoItem}
              editTodoItem={this.editTodoItem}
            />
          )}
        </div>
      </>
    );
  }
}

export default Todos;
