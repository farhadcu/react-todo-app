import React from 'react';

function TableView({ todos, toggleComplete, deleteTodoItem, editTodoItem }) {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Todo</th>
            <th scope="col">Edit</th>
            <th scope="col">Action</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <td>{todo.time}</td>
              <td>
                <h4 className="mb-0">{todo.title}</h4>
                <p className="description mb-0 mt-1 card-text">
                  {todo.description}
                </p>
              </td>
              <td>
                <button
                  onClick={() => editTodoItem(todo.id)}
                  className="btn btn-primary me-4"
                >
                  Edit
                </button>
              </td>
              <td onClick={() => toggleComplete(todo.id)}>
                {todo.isComplete ? (
                  <button className="btn btn-warning">Completed</button>
                ) : (
                  <button className="btn btn-success">Running</button>
                )}
              </td>
              <td>
                <button
                  onClick={() => deleteTodoItem(todo.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableView;
