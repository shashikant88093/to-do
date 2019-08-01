import React, { Component } from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete,handleEdit } = this.props;
    return (
      <>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center"> Todo List</h3>
          {items.map(items => {
            return (
              <TodoItems
                key={items.id}
                title={items.title}
                handleDelete={() => handleDelete(items.id)}
                handleEdit={() => handleEdit(items.id)}
              />
            );
          })}

          <button
            type="button"
            className="btn btn-danger btn-block text-capitalize mt-5"
            onClick={clearList}
          >
            Clear List
          </button>
        </ul>
      </>
    );
  }
}

export default TodoList;
