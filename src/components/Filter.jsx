import React, { useState } from "react";
import Form from "./Form";
import { ImCross } from "react-icons/im";

const Filter = ({ items, onRemove, onClear }) => {
  const [filteText, setFilterText] = useState("");
  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(filteText.toLowerCase())
  );
  return (
    <div className="container">
      <div className="filter">
        <input
          type="text"
          className="form-input-filter"
          id="filter"
          placeholder="Filter Items"
          value={filteText}
          onChange={handleFilterChange}
        />
      </div>

      <ul id="item-list" className="items">
        {filteredItems.map((item, index) => (
          <li key={index}>
            {item} <ImCross onClick={() => onRemove(index)} />
          </li>
        ))}
      </ul>
      <button id="clear" className="btn-clear" onClick={onClear}>
        Clear All
      </button>
    </div>
  );
};

export default Filter;
