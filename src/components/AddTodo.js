import React, { useState } from "react";
import "../styles/AddTodo.css";
const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() !== "") {
      addTodo({
        id: Date.now(),
        text,
        completed: false,
      });
      setText("");
    }
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleInputChange} placeholder="What to do" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
