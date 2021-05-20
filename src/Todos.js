import React from "react";
import "./index.css";
const Todos = ({ todos, deletetask }) => {
  const completed = (e) => {
    e.target.classList.add("strike");
  };
  const todolist = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onDoubleClick={() => {
              deletetask(todo.id);
            }}
            onClick={completed}
          >
            {todo.task}
          </span>
        </div>
      );
    })
  ) : (
    <p className="">You Have no task left !!</p>
  );
  return (
    <>
     <div className="collection z-depth-3 teal-text text-darken-2">{todolist}</div><br/>
     <div className="teal-text text-darken-4">
     <p>Click to Mark as Done<br/>
     Double Click to Delete</p>
     </div>
    </>
  );
  }
export default Todos;
