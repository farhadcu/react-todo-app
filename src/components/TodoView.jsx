import React from 'react';
import ListView from './ListView';
import TableView from './TableView';

function TodoView({
  todos,
  toggleComplete,
  deleteTodoItem,
  view,
  editTodoItem,
}) {
  return (
    <div>
      {view === 'list' ? (
        <ListView
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodoItem={deleteTodoItem}
          editTodoItem={editTodoItem}
        />
      ) : (
        <TableView
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodoItem={deleteTodoItem}
          editTodoItem={editTodoItem}
        />
      )}
    </div>
  );
}

export default TodoView;
