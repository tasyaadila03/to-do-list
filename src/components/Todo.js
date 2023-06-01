import React, { useState } from "react";
import "../styles/Todo.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoList = ({ todos, filter, deleteTodo, toggleTodo, setTodos }) => {
  const filterTodos = (filter) => {
    if (filter === "active") {
      return todos.filter((todo) => !todo.completed);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    } else {
      return todos;
    }
  };

  const filteredTodos = filterTodos(filter);

  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTodoText, setEditedTodoText] = useState("");

  const handleEditInputChange = (event) => {
    setEditedTodoText(event.target.value);
  };

  const handleEditButtonClick = (todo) => {
    setEditingTodoId(todo.id);
    setEditedTodoText(todo.text);
  };

  const handleEditFormSubmit = (event, todo) => {
    event.preventDefault();
    const updatedTodos = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, text: editedTodoText };
      }
      return item;
    });
    setTodos(updatedTodos);
    setEditingTodoId(null);
    setEditedTodoText("");
  };

  return (
    <div className="todo-container">
      <div className="todo">
        <ul>
          {filteredTodos.map((todo) => (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                {editingTodoId === todo.id ? (
                  <form onSubmit={(event) => handleEditFormSubmit(event, todo)} className="edit">
                    <input type="text" value={editedTodoText} onChange={handleEditInputChange} />
                    <button type="submit">Save</button>
                  </form>
                ) : (
                  <>
                    <span
                      style={{
                        textDecoration: todo.completed ? "line-through" : "none",
                      }}
                    >
                      {todo.text}
                    </span>
                    {!editingTodoId && (
                      <>
                        <div className="icon-container">
                          <FontAwesomeIcon className="icon" onClick={() => handleEditButtonClick(todo)} icon={faPenToSquare} />
                          <FontAwesomeIcon className="icon2" onClick={() => deleteTodo(todo.id)} icon={faTrash} />
                        </div>
                      </>
                    )}
                  </>
                )}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
