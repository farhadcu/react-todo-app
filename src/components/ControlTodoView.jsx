import React from 'react';

function ControlTodoView({ view, changeView }) {
  return (
    <div className="container mb-5">
      <div onChange={changeView} className="d-flex justify-content-center">
        <div className="me-4">
          <input
            className="me-2"
            id="listView"
            type="radio"
            value="list"
            name="view"
            checked={view === 'list'}
          />
          <label htmlFor="listView">List View</label>
        </div>
        <div>
          <input
            className="me-2"
            id="tableView"
            type="radio"
            value="table"
            name="view"
            checked={view === 'table'}
          />
          <label htmlFor="tableView">Table View</label>
        </div>
      </div>
    </div>
  );
}

export default ControlTodoView;
