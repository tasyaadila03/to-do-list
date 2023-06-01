import React from "react";
import "../styles/FilterTodo.css";

const FilterTodo = ({ filter, setFilter }) => {
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <div className="wrapper">
      <div className="filter-todo">
        <button onClick={() => handleFilterChange("all")} className={filter === "all" ? "active" : ""}>
          All
        </button>
        <button onClick={() => handleFilterChange("active")} className={filter === "active" ? "active" : ""}>
          Active
        </button>
        <button onClick={() => handleFilterChange("completed")} className={filter === "completed" ? "active" : ""}>
          Completed
        </button>
      </div>
    </div>
  );
};

export default FilterTodo;
