import React from 'react';

function ListView({ todos, toggleComplete, deleteTodoItem, editTodoItem }) {
  return (
    <div className="container">
      <div className="items">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="item d-flex flex-wrap justify-content-between align-items-center bg-light shadow p-4 my-4"
          >
            <div className="left me-4">
              <h4>{todo.title}</h4>
              <p className="mt-1 card-text">{todo.description}</p>
              <p className="mt-3">Time: {todo.time}</p>
            </div>
            <div className="right">
              <button
                onClick={() => editTodoItem(todo.id)}
                className="btn btn-primary me-4"
              >
                Edit
              </button>
              <button
                onClick={() => toggleComplete(todo.id)}
                className={
                  todo.isComplete
                    ? 'btn btn-warning me-3'
                    : 'btn btn-success me-3'
                }
              >
                {todo.isComplete ? 'Completed' : 'Running'}
              </button>
              <button
                onClick={() => deleteTodoItem(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListView;
