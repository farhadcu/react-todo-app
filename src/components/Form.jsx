import React from 'react';

function Form({ title, description, handleChange, addTodo }) {
  return (
    <div className="my-5">
      <div className="container">
        <form
          onSubmit={addTodo}
          className="form-group row g-4 justify-content-center"
        >
          <div className="col-md-8">
            <input
              onChange={handleChange}
              name="title"
              type="text"
              className="form-control"
              value={title}
              placeholder="Title"
            />
          </div>
          <div className="col-md-8">
            <textarea
              onChange={handleChange}
              name="description"
              className="form-control"
              value={description}
              placeholder="Description"
            ></textarea>
          </div>
          <div className="text-center">
            <button className="btn btn-primary">Add Todo</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
