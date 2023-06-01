import React, { useState } from "react";
import TodoList from "./components/Todo";
import AddTodo from "./components/AddTodo";
import FilterTodo from "./components/FilterTodo";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const updateTodo = (id, updatedText) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: updatedText } : todo)));
  };

  return (
    <div className="container">
      <div className="header">
        <h1>What's the plant for today?</h1>
      </div>

      <AddTodo addTodo={addTodo} />
      <FilterTodo filter={filter} setFilter={setFilter} />
      <TodoList todos={todos} filter={filter} deleteTodo={deleteTodo} toggleTodo={toggleTodo} updateTodo={updateTodo} setTodos={setTodos} />
    </div>
  );
};

export default App;
