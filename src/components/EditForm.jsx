import React from 'react';

function EditForm({
  editTitle,
  editDescription,
  handleEditChange,
  updateTodo,
  cencelEdit,
}) {
  return (
    <div className="my-5">
      <div className="container">
        <form
          onSubmit={updateTodo}
          className="form-group row g-4 justify-content-center"
        >
          <div className="col-md-8">
            <input
              onChange={handleEditChange}
              name="editTitle"
              type="text"
              className="form-control"
              value={editTitle}
              placeholder="Title"
            />
          </div>
          <div className="col-md-8">
            <textarea
              onChange={handleEditChange}
              name="editDescription"
              className="form-control"
              value={editDescription}
              placeholder="Description"
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary me-4">
              Update
            </button>
            <a onClick={cencelEdit} className="btn btn-danger">
              Cencel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditForm;
